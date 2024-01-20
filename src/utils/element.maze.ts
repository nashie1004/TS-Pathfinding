import Node from "./element.node";

export default class Maze{
    mazeId: string;
    mazeSize: number;

    constructor(mazeSize: number = 30) {
        this.mazeId = "maze";
        this.mazeSize = mazeSize;
    }

    createNode(): string{
        let htmlNodes = "";

        for(let i = 0; i < this.mazeSize; i++){
            const htmlNode = new Node(i);
            
            htmlNodes += htmlNode.render();
        }

        return htmlNodes
    }

    render(){
        const MazeContent = `<div class="container text-center">
            <div class="row row-cols-auto">
                ${this.createNode()}
            </div>
        </div>`;

        const Maze: HTMLElement | null = document.getElementById(this.mazeId);
        Maze?.classList.add("container-fluid", "mt-2")
        Maze!.innerHTML = MazeContent
    }
}