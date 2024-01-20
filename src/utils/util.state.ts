import AStar from "./algo.aStar";
import BFS from "./algo.bfs";
import DFS from "./algo.dfs";
import Djikstra from "./algo.djikstra";
import Node from "./element.node";
import { AlgoNames, HTMLIds } from "./util.constants";

declare var bootstrap: any;

interface IToaster{
    message: string,
    elementId: string
}

export type IGraph = Map<[number, number], Node>

interface IExecAlgo{
    aStar: AStar;
    bfs: BFS;
    dfs: DFS;
    djikstra: Djikstra;
}

export default class State{
    toasterBtnToggles: IToaster[];
    gridSize: number
    row: number
    column: number
    nodeSize: number
    gridGraph: IGraph;
    algos: IExecAlgo;

    constructor() {
        this.toasterBtnToggles = [
            {message: "Grid Reset Successfully!", elementId: HTMLIds.navReset },
            {message: "Visualizing Algorithm...", elementId: HTMLIds.navVisualize },
            {message: "Start Node Picked!", elementId: HTMLIds.navStartNode },
            {message: "End Node Picked!", elementId: HTMLIds.navEndNode },
            {message: "Wall Node Picked!", elementId: HTMLIds.navWallNode },
        ];
        this.column = 45;
        this.row = 18;
        this.nodeSize = 30; //px
        this.gridSize = this.row * this.column
        this.gridGraph = new Map();
        this.algos = {
            aStar: new AStar(this.gridGraph),
            djikstra: new Djikstra(this.gridGraph),
            bfs: new BFS(this.gridGraph),
            dfs: new DFS(this.gridGraph)
        }
    }

    getAlgoSelected(){
        const select: HTMLSelectElement | null = document.getElementById(HTMLIds.navSelect) as HTMLSelectElement;
        return select;
    }

    setExecuteAlgo(){
        const select = this.getAlgoSelected();
        
        if (select){
            console.log(select, select.value)
            
            switch(select.value){
                case AlgoNames.algorithmAStar:
                    this.algos.aStar.run();

                    break;
                case AlgoNames.algorithmBFS:
                    this.algos.bfs.run();

                    break;
                case AlgoNames.algorithmDFS:
                    this.algos.dfs.run();

                    break;
                case AlgoNames.algorithmDijkstra:
                    this.algos.djikstra.run();

                    break;
            }
        }
    }

    setReset(){

    }

    setToasterClickEvents(){
        const toastLiveExample = document.getElementById(HTMLIds.toasterBody)
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

        for(let btn of this.toasterBtnToggles){
            document.getElementById(btn.elementId)!.addEventListener("click", () => {
                toastBootstrap.show()
                document.getElementById(HTMLIds.toasterBodyText)!.textContent = btn.message

                // TODO
                switch(btn.elementId){
                    case HTMLIds.navReset:
                        this.setReset();
                        break;
                    case HTMLIds.navVisualize:
                        this.setExecuteAlgo();
                        break;
                    case HTMLIds.navStartNode:
                        break;
                    case HTMLIds.navEndNode:
                        break;
                    case HTMLIds.navWallNode:
                        break;
                }

            })
        }
    }

    setListenGridMovement(){

    }

    setGridDimension(){
        document.getElementById(HTMLIds.mazeEntry)!.style.gridTemplateColumns = `repeat(${this.column}, ${this.nodeSize}px)`
        document.getElementById(HTMLIds.mazeEntry)!.style.gridTemplateRows = `repeat(${this.row},${this.nodeSize}px)`
    }

    setInitialNodes(){
        this.setGridDimension();

        let htmlNodes = "";

        for(let row = 0; row < this.row; row++){
            for(let col = 0; col < this.column; col++){
                const idx: [number, number] = [col, row]; // Inverse = [0: x/horizontal, 1: y/vertical]
                const htmlNode = new Node(idx, this.row, this.column);

                this.gridGraph.set(idx, htmlNode)

                htmlNodes += htmlNode.render();
            }
        }
        
        const mazeEntry: HTMLElement | null = document.getElementById(HTMLIds.mazeEntry);
        mazeEntry!.innerHTML = htmlNodes

        console.log(this.gridGraph)

        this.setListenGridMovement();
    }

    init(){
        this.setToasterClickEvents();
        this.setInitialNodes()
    }
}