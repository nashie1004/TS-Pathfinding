import { HTMLIds } from "./util.constants";

export default class Maze{

    constructor() {
    }

    render(){
        const MazeContent = `<div class="text-center overflow-x-auto">
            <div class="d-grid p-2" id="${HTMLIds.mazeEntry}">
                
            </div>
        </div>`;

        const Maze: HTMLElement | null = document.getElementById(HTMLIds.maze);
        Maze!.innerHTML = MazeContent
    }
}