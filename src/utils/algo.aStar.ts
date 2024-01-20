import { IGraph } from "./util.state";
import Node from "./element.node";

export default class AStar{
    graph: IGraph;

    /**
     *
     */
    constructor(graph: IGraph) {
        this.graph = graph
    }

    run(srcNode: Node, goalNode: Node){
        // alert("todo ")
        console.log(this.graph, srcNode, goalNode)
    }
}