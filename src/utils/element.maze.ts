import Node from "./element.node";

export default class Maze{
    mazeId: string;
    mazeSize: number;

    constructor(mazeSize: number = 777) {
        this.mazeId = "maze";
        this.mazeSize = mazeSize;
    }

    createNodes(): string{
        let htmlNodes = "";

        for(let i = 0; i < this.mazeSize; i++){
            const htmlNode = new Node(i);
            
            htmlNodes += htmlNode.render();
        }

        return htmlNodes
    }

    render(){
        //overflow-x-scroll
        const MazeContent = `<div class="container text-center ">
            <div class="row row-cols-auto">
                ${this.createNodes()}
            </div>
        </div>`;

        const Maze: HTMLElement | null = document.getElementById(this.mazeId);
        Maze?.classList.add("container-fluid", "mt-2", "mb-2")
        Maze!.innerHTML = MazeContent
    }
}