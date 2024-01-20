import { HTMLIds } from "./util.constants";

export default class Node {
    nodeId: [number, number];
    evaluated: boolean;
    xCoordinate: number;
    yCoordinate: number;
    nodeState: 
    HTMLIds.nodeStateEmpty | HTMLIds.nodeStateEnd | 
    HTMLIds.nodeStateStart | HTMLIds.nodeStateEvaluated | 
    HTMLIds.nodeStateWall
    // neighbors: 

    constructor(nodeId: [number, number] = [0, 0]) {
        this.nodeId = nodeId;
        this.evaluated = false;
        this.xCoordinate = nodeId[0]
        this.yCoordinate = nodeId[1]
        this.nodeState = HTMLIds.nodeStateEmpty
    }

    getNeighborNodes(){
        //
    }

    setNodeAsStartNode(){

    }

    setNodeAsEndNode(){
        //
    }

    setNodeAsBarrier(){
        //bg-dark
        const node: HTMLElement | null = document.querySelector(`[data-nodeId="${this.nodeId}"]`)
        node!.classList.add("bg-dark");
    }

    setNodeAsEvaluated(){
        //.bg-primary-subtle
        const node: HTMLElement | null = document.querySelector(`[data-nodeId="${this.nodeId}"]`)
        node!.classList.add("bg-primary-subtle");
    }

    setNodeAsPath(){
        //.bg-warning
        const node: HTMLElement | null = document.querySelector(`[data-nodeId="${this.nodeId}"]`)
        node!.classList.add("bg-warning");
    }

    render(): string{
        return `<div class="border user-select-none" data-nodeId='${this.nodeId}'>&nbsp;</div>`
    }
}