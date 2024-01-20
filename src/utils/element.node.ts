import {  NodeState } from "./util.constants";

interface INeighbors {
    top: [number, number] | null;
    botttom: [number, number] | null;
    left: [number, number] | null;
    right: [number, number] | null;
}

export default class Node {
    nodeId: [number, number];
    _nodeIdString: string
    evaluated: boolean;
    xCoordinate: number;
    yCoordinate: number;
    nodeState: 
    NodeState.nodeStateEmpty | NodeState.nodeStateEnd | 
    NodeState.nodeStateStart | NodeState.nodeStateEvaluated | 
    NodeState.nodeStateWall
    neighbors: INeighbors 
    xLimit: number
    yLimit: number

    // [0: x/horizontal, 1: y/vertical]
    constructor(nodeId: [number, number] = [0, 0], ylimit: number, xlimit: number) {
        this.nodeId = nodeId; // results to undefined on map.get(nodeId) --pass by reference
        this._nodeIdString = JSON.stringify(this.nodeId);
        this.evaluated = false;
        this.xCoordinate = nodeId[0] // row/col are swap?
        this.yCoordinate = nodeId[1]
        this.nodeState = NodeState.nodeStateEmpty
        this.neighbors = {
            top: null, botttom: null, 
            left: null, right: null
        }
        this.xLimit = xlimit
        this.yLimit = ylimit

        this.getNeighborNodes();
    }

    getNeighborNodes(){
        if (this.yCoordinate + 1 < this.yLimit) { 
            this.neighbors.botttom = [this.xCoordinate, this.yCoordinate + 1]
        }
        if (this.yCoordinate > 0) {
            this.neighbors.top = [this.xCoordinate, this.yCoordinate - 1]
        }
        if (this.xCoordinate + 1 < this.xLimit) {
            this.neighbors.right = [this.xCoordinate + 1, this.yCoordinate ]
        }
        if (this.xCoordinate > 0) {
            this.neighbors.left = [this.xCoordinate - 1, this.yCoordinate]
        }
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
        return `<div class="border user-select-none" data-nodeId='${this.nodeId}'>
        &nbsp;
        </div>`
    }
}