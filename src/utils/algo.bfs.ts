import { IGraph } from "./util.state";
import Node from "./element.node";

export default class BFS{
    graph: IGraph
    
    /**
     *
     */
    constructor(graph: IGraph) {
        this.graph = graph;
    }

    run(startNode: Node, endNode: Node){
        alert("todo ")
    }
}