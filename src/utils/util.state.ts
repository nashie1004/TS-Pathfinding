import Node from "./element.node";
import { HTMLIds } from "./util.constants";

declare var bootstrap: any;

interface IToaster{
    message: string,
    elementId: string
}

interface IGraphNode{
    evaluated: boolean,
    xCoordinate: number,
    yCoordinate: number,
    nodeState: 
    HTMLIds.nodeStateEmpty | HTMLIds.nodeStateEnd | 
    HTMLIds.nodeStateStart | HTMLIds.nodeStateEvaluated | 
    HTMLIds.nodeStateWall
}


export default class State{
    toasterBtnToggles: IToaster[];
    algoSelected: HTMLIds.algorithmDFS | HTMLIds.algorithmBFS | HTMLIds.algorithmAStar | HTMLIds.algorithmDijkstra
    gridSize: number
    row: number
    column: number
    nodeSize: number
    gridGraph: Map<[number, number], IGraphNode>;

    constructor() {
        this.toasterBtnToggles = [
            {message: "Grid Reset Successfully!", elementId: HTMLIds.navReset.toString() },
            {message: "Visualizing Algorithm...", elementId: HTMLIds.navVisualize.toString() },
            {message: "Start Node Picked!", elementId: HTMLIds.navStartNode.toString() },
            {message: "End Node Picked!", elementId: HTMLIds.navEndNode.toString() },
            {message: "Wall Node Picked!", elementId: HTMLIds.navWallNode.toString() },
        ];
        this.algoSelected = HTMLIds.algorithmDFS
        this.column = 45;
        this.row = 18;
        this.nodeSize = 30; //px
        this.gridSize = this.row * this.column
        this.gridGraph = new Map();
    }

    getAlgoSelected(){
        const select: HTMLElement | null = document.getElementById(HTMLIds.navSelect);
        console.log(select)
    }

    setToasterClickEvents(){
        const toastLiveExample = document.getElementById(HTMLIds.toasterBody)
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

        for(let btn of this.toasterBtnToggles){
            document.getElementById(btn.elementId)!.addEventListener("click", () => {
                toastBootstrap.show()
                document.getElementById(HTMLIds.toasterBodyText)!.textContent = btn.message
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

        for(let rowI = 0; rowI < this.row; rowI++){
            for(let colJ = 0; colJ < this.column; colJ++){
                const idx: [number, number] = [rowI, colJ];
                const htmlNode = new Node(idx);

                this.gridGraph.set(idx, { 
                    evaluated: false,
                    xCoordinate: rowI,
                    yCoordinate: colJ,
                    nodeState: HTMLIds.nodeStateEmpty
                })
                
                htmlNodes += htmlNode.render();
            }
        }
        
        const mazeEntry: HTMLElement | null = document.getElementById(HTMLIds.mazeEntry);
        mazeEntry!.innerHTML = htmlNodes

        console.log(this.gridGraph)
    }

    init(){
        this.setToasterClickEvents();
        this.getAlgoSelected()
        this.setInitialNodes()
    }
}