import { HTMLIds } from "./util.constants";

export default class Maze{
    mazeSize: number;

    constructor(mazeSize: number = 777) {
        this.mazeSize = mazeSize;
    }

    render(){
        //overflow-x-scroll
        const MazeContent = `<div class="container text-center ">
            <div class="row row-cols-auto" id="${HTMLIds.mazeEntry}">
                
            </div>
        </div>`;

        const Maze: HTMLElement | null = document.getElementById(HTMLIds.maze);
        Maze?.classList.add("container-fluid", "mt-2", "mb-2")
        Maze!.innerHTML = MazeContent
    }
}