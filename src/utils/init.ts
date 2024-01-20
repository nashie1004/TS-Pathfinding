import Nav from "./element.nav";
import Maze from "./element.maze";
import Toaster from "./element.toaster";
import Progress from "./element.progress";
import Modal from "./element.modal";

export default class Init{
    nav: Nav;
    maze: Maze;
    toaster: Toaster;
    progress: Progress;
    modal: Modal;

    constructor() {
        this.nav = new Nav();
        this.maze = new Maze();
        this.toaster = new Toaster();
        this.progress = new Progress();
        this.modal = new Modal();
    }

    initialize(){
        this.nav.render();
        this.maze.render();
        this.progress.render();
        this.toaster.render()
        this.modal.render();
    }
}