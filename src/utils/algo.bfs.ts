import { IGraph } from "./util.state";
import Node, { INeighbors } from "./element.node";

export default class BFS{
    graph: IGraph
    
    /**
     *
     */
    constructor(graph: IGraph) {
        this.graph = graph;
    }

    run(startNode: Node, endNode: Node){

        const visitedNodes: Node[] = [startNode]
        const queue: Node[] = [startNode] 
        const predecessor = new Map<string, Node>();

        const mainIntervalId = setInterval(() => {

            const currentNode = queue.shift();

            if (endNode._nodeIdString === currentNode?._nodeIdString){
                clearInterval(mainIntervalId);

                // solved, to backtrack
                const path: Node[] = []
                let current = startNode;

                //const backtrackId = setInterval(() => {

                    
                    // if (current){
                        
                    //         next.setNodeAsPath()
                    //         path.push(next)
                    //         current = predecessor.get(current._nodeIdString);
                    //     }
                    //     console.log(next, current?._nodeIdString,  path)
                    // }

                    // if (current?._nodeIdString === endNode._nodeIdString){
                    //     clearInterval(backtrackId)
                    // }

                //}, 5)
            }

            if (currentNode){
                for (const position in currentNode.neighbors){
                    const neighborIdString = currentNode.neighbors[position as keyof INeighbors]
                    
                    if (!neighborIdString) continue;

                    const neighbor = this.graph.get(neighborIdString)
    
                    if (!neighbor) continue
    
                    if (!visitedNodes.includes(neighbor)){
                        visitedNodes.push(neighbor)
                        queue.push(neighbor)
                        neighbor?.setNodeAsEvaluated();
                        // for backtracking?
                        predecessor.set(neighbor._nodeIdString, currentNode)
                    }
                }
            }


        }, .1)

    }
}