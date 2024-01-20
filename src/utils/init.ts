import Nav from "./element.nav";
import Maze from "./element.maze";
import Toaster from "./element.toaster";
import Progress from "./element.progress";

export default class Init{
    nav: Nav;
    maze: Maze;
    toaster: Toaster;
    progress: Progress;

    constructor() {
        this.nav = new Nav();
        this.maze = new Maze();
        this.toaster = new Toaster();
        this.progress = new Progress();
    }

    initialize(){
        this.nav.render();
        this.maze.render();
        this.toaster.render()
        this.progress.render();
    }
}