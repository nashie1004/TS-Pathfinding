export default class Node {
    nodeId: [number, number];

    constructor(nodeId: [number, number]) {
        this.nodeId = nodeId;
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