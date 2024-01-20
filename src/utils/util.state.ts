import AStar from "./algo.aStar";
import BFS from "./algo.bfs";
import DFS from "./algo.dfs";
import Djikstra from "./algo.djikstra";
import Node from "./element.node";
import { AlgoNames, HTMLIds, NodeState } from "./util.constants";

declare var bootstrap: any;

interface IToaster{
    message: string,
    elementId: string
}

export type IGraph = Map<string, Node>

interface IExecAlgo{
    aStar: AStar;
    bfs: BFS;
    dfs: DFS;
    djikstra: Djikstra;
}

interface IGrid{
    row: number;
    column: number;
    nodeSize: number
    graph: IGraph;
    algos: IExecAlgo
    startNodeHasBeenSet: Node | null;
    endNodeHasBeenSet: Node | null;
}

export default class State{
    toasterBtnToggles: IToaster[];
    
    // row = y, column = x
    grid: IGrid;
    
    recentEventBtnTriggered: "" | HTMLIds.navStartNode | HTMLIds.navEndNode | HTMLIds.navWallNode;

    constructor() {
        this.toasterBtnToggles = [
            {message: "Grid Reset Successfully!", elementId: HTMLIds.navReset },
            {message: "Visualizing Algorithm...", elementId: HTMLIds.navVisualize },
            {message: "Start Node Picked!", elementId: HTMLIds.navStartNode },
            {message: "End Node Picked!", elementId: HTMLIds.navEndNode },
            {message: "Wall Node Picked!", elementId: HTMLIds.navWallNode },
        ];
        const tempMap = new Map();
        this.grid = {
            column: 45,
            row: 45,
            nodeSize: 30,
            graph: tempMap,
            algos: {
                aStar: new AStar(tempMap),
                djikstra: new Djikstra(tempMap),
                bfs: new BFS(tempMap),
                dfs: new DFS(tempMap)
            },
            startNodeHasBeenSet: null,
            endNodeHasBeenSet: null
        }
        this.recentEventBtnTriggered = ""
    }

    setNewGrid(){ // has clean state
        const tempMap = new Map();
        this.grid = {
            column: 45,
            row: 45,
            nodeSize: 30,
            graph: tempMap,
            algos: {
                aStar: new AStar(tempMap),
                djikstra: new Djikstra(tempMap),
                bfs: new BFS(tempMap),
                dfs: new DFS(tempMap)
            },
            startNodeHasBeenSet: null,
            endNodeHasBeenSet: null
        }
    }

    getAlgoSelected(){
        const select: HTMLSelectElement | null = document.getElementById(HTMLIds.navSelect) as HTMLSelectElement;
        return select;
    }

    setExecuteAlgo(startNode: Node, endNode: Node){
        const select = this.getAlgoSelected();
        
        switch(select.value){
            case AlgoNames.algorithmAStar:
                this.grid.algos.aStar.run(startNode, endNode);
                break;
            case AlgoNames.algorithmBFS:
                this.grid.algos.bfs.run(startNode, endNode);
                break;
            case AlgoNames.algorithmDFS:
                this.grid.algos.dfs.run(startNode, endNode);
                break;
            case AlgoNames.algorithmDijkstra:
                this.grid.algos.djikstra.run(startNode, endNode);
                break;
        }
    }

    setReset(){
        this.setNewGrid();
        this.setRenderNodes();
    }

    setToasterClickEvents(){
        const toastLiveExample = document.getElementById(HTMLIds.toasterBody)
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

        for(let btn of this.toasterBtnToggles){
            document.getElementById(btn.elementId)!.addEventListener("click", () => {
                    console.log(btn)
                switch(btn.elementId){
                    case HTMLIds.navReset:
                        this.setReset();
                        break;
                    case HTMLIds.navVisualize:
                        // check if start and end node has been set
                        if (!this.grid.startNodeHasBeenSet || !this.grid.endNodeHasBeenSet) {
                            toastBootstrap.show()
                            document.getElementById(HTMLIds.toasterBodyText)!.textContent = "Set a starting or end point first!"
                            return;
                        }
                        this.setExecuteAlgo(this.grid.startNodeHasBeenSet, this.grid.endNodeHasBeenSet);
                        break;
                    // these 3 below are for this.setListenGridContainerClickEvent() 
                    case HTMLIds.navStartNode:
                        this.recentEventBtnTriggered = HTMLIds.navStartNode
                        break;
                    case HTMLIds.navEndNode:
                        this.recentEventBtnTriggered = HTMLIds.navEndNode
                        break;
                    case HTMLIds.navWallNode:
                        this.recentEventBtnTriggered = HTMLIds.navWallNode
                        break;
                }

                toastBootstrap.show()
                document.getElementById(HTMLIds.toasterBodyText)!.textContent = btn.message

            })
        }
    }

    setListenGridContainerClickEvent(){
        document.getElementById(HTMLIds.maze)!.addEventListener("click", (e: MouseEvent) => {
            const cell: HTMLElement | null = e.target as HTMLElement
            
            if (!(cell?.dataset?.nodeid)) return

            // get id
            const nodeId = cell.dataset.nodeid.split(",").map(Number) as [number, number];
            const _nodeIdString = JSON.stringify(nodeId);
            // get node
            const foundNode: Node | undefined = this.grid.graph.get(_nodeIdString);

            // check if node exists, and only set empty nodes if state is empty 
            if (!foundNode || foundNode.nodeState !== NodeState.nodeStateEmpty) return;

            // check the recent event/btn clicked
            switch(this.recentEventBtnTriggered){
                case HTMLIds.navStartNode:
                    // sets start node only once
                    if (this.grid.startNodeHasBeenSet) return;
                    foundNode.setNodeAsStartNode()
                    this.grid.startNodeHasBeenSet = foundNode;
                    break;
                case HTMLIds.navEndNode:
                    // sets end node only once
                    if (this.grid.endNodeHasBeenSet) return;
                    foundNode.setNodeAsEndNode()
                    this.grid.endNodeHasBeenSet = foundNode;
                    break;
                case HTMLIds.navWallNode:
                    foundNode.setNodeAsBarrier()
                    break;
            }

            console.log(this.recentEventBtnTriggered, foundNode)
        })
    }

    setGridDimension(){
        document.getElementById(HTMLIds.mazeEntry)!.style.gridTemplateColumns = `repeat(${this.grid.column}, ${this.grid.nodeSize}px)`
        document.getElementById(HTMLIds.mazeEntry)!.style.gridTemplateRows = `repeat(${this.grid.column},${this.grid.nodeSize}px)`
    }

    setRenderNodes(){
        this.setGridDimension();

        let htmlNodes = "";

        for(let y = 0; y < this.grid.row; y++){
            for(let x = 0; x < this.grid.column; x++){
                const idx: [number, number] = [x, y]; // Inverse = [0: x/horizontal, 1: y/vertical]
                const htmlNode = new Node(idx, this.grid.row, this.grid.column);

                this.grid.graph.set(htmlNode._nodeIdString, htmlNode)

                htmlNodes += htmlNode.render();
            }
        }
        
        const mazeEntry: HTMLElement | null = document.getElementById(HTMLIds.mazeEntry);
        mazeEntry!.innerHTML = htmlNodes
    }

    init(){
        this.setToasterClickEvents();
        this.setListenGridContainerClickEvent();
        this.setRenderNodes()
    }
}