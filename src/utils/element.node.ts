import {  NodeState } from "./util.constants";

export interface INeighbors {
    _top: string | null;
    _bottom: string | null;
    _left: string | null;
    _right: string | null;
}

export default class Node {
    nodeId: [number, number];
    _nodeIdString: string
    xCoordinate: number;
    yCoordinate: number;
    nodeState: NodeState
    neighbors: INeighbors 
    xLimit: number
    yLimit: number

    // [0: x/horizontal, 1: y/vertical]
    constructor(nodeId: [number, number] = [0, 0], ylimit: number, xlimit: number) {
        this.nodeId = nodeId; // results to undefined on map.get(nodeId) --pass by reference
        this._nodeIdString = JSON.stringify(this.nodeId);
        this.xCoordinate = nodeId[0] // row/col are swap?
        this.yCoordinate = nodeId[1]
        this.nodeState = NodeState.nodeStateEmpty
        this.neighbors = {
            _top: null, _bottom: null, 
            _left: null, _right: null
        }
        this.xLimit = xlimit
        this.yLimit = ylimit

        this.getNeighborNodes();
    }

    getNeighborNodes(){
        if (this.yCoordinate + 1 < this.yLimit) { 
            this.neighbors._bottom = JSON.stringify([this.xCoordinate, this.yCoordinate + 1])
        }
        if (this.yCoordinate > 0) {
            this.neighbors._top = JSON.stringify([this.xCoordinate, this.yCoordinate - 1])
        }
        if (this.xCoordinate + 1 < this.xLimit) {
            this.neighbors._right = JSON.stringify([this.xCoordinate + 1, this.yCoordinate ])
        }
        if (this.xCoordinate > 0) {
            this.neighbors._left = JSON.stringify([this.xCoordinate - 1, this.yCoordinate])
        }
    }

    setNodeAsStartNode(){
        
        const node: HTMLElement | null = document.querySelector(`[data-nodeId="${this.nodeId}"]`)
        if (!node) return;
        node.classList.add("bg-success");
        this.nodeState = NodeState.nodeStateStart
    }

    setNodeAsEndNode(){
        //
        const node: HTMLElement | null = document.querySelector(`[data-nodeId="${this.nodeId}"]`)
        if (!node) return;
        node.classList.add("bg-danger");
        this.nodeState = NodeState.nodeStateEnd
    }

    setNodeAsBarrier(){
        //bg-dark
        const node: HTMLElement | null = document.querySelector(`[data-nodeId="${this.nodeId}"]`)
        if (!node) return;
        node.classList.add("bg-dark");
        this.nodeState = NodeState.nodeStateWall
    }

    setNodeAsEvaluated(){
        //.bg-primary-subtle
        const node: HTMLElement | null = document.querySelector(`[data-nodeId="${this.nodeId}"]`)
        if (!node) return;
        node.classList.add("bg-primary-subtle");
        this.nodeState = NodeState.nodeStateEvaluated;
    }

    setNodeAsPath(){
        //.bg-warning
        const node: HTMLElement | null = document.querySelector(`[data-nodeId="${this.nodeId}"]`)
        if (!node) return;
        node.classList.add("bg-warning");
        this.nodeState = NodeState.nodeStatePath;
    }

    render(): string{ 
        return `<div class="border user-select-none" data-nodeId='${this.nodeId}'>
        &nbsp;
        </div>`
    }
}