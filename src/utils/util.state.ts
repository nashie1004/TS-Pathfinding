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
    gridGraph: Map<number, IGraphNode>;

    constructor() {
        this.toasterBtnToggles = [
            {message: "Grid Reset Successfully!", elementId: HTMLIds.navReset.toString() },
            {message: "Visualizing Algorithm...", elementId: HTMLIds.navVisualize.toString() },
            {message: "Start Node Picked!", elementId: HTMLIds.navStartNode.toString() },
            {message: "End Node Picked!", elementId: HTMLIds.navEndNode.toString() },
            {message: "Wall Node Picked!", elementId: HTMLIds.navWallNode.toString() },
        ];
        this.algoSelected = HTMLIds.algorithmDFS
        this.gridSize = 777
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

    setInitialNodes(){
        let htmlNodes = "";

        for(let i = 0; i < this.gridSize; i++){
            const htmlNode = new Node(i);

            this.gridGraph.set(i, { 
                evaluated: false,
                xCoordinate: 0,
                yCoordinate: 0,
                nodeState: HTMLIds.nodeStateEmpty
            })
            
            htmlNodes += htmlNode.render();
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