export default class Node {
    nodeIndex: number;

    constructor(nodeIndex: number = 0) {
        this.nodeIndex = nodeIndex;
    }

    setNodeAsStartNode(){

    }

    setNodeAsEndNode(){
        //
    }

    setNodeAsBarrier(){
        //bg-dark
        const node: HTMLElement | null = document.querySelector(`[data-nodeIndex="${this.nodeIndex}"]`)
        node!.classList.add("bg-dark");
    }

    setNodeAsEvaluated(){
        //.bg-primary-subtle
        const node: HTMLElement | null = document.querySelector(`[data-nodeIndex="${this.nodeIndex}"]`)
        node!.classList.add("bg-primary-subtle");
    }

    setNodeAsPath(){
        //.bg-warning
        const node: HTMLElement | null = document.querySelector(`[data-nodeIndex="${this.nodeIndex}"]`)
        node!.classList.add("bg-warning");
    }

    render(): string{
        return `<div class="col border user-select-none" data-nodeIndex='${this.nodeIndex}'>&nbsp;</div>`
    }
}