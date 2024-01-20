import Nav from "./element.nav";
import Maze from "./element.maze";
import Toaster from "./element.toaster";
import Progress from "./element.progress";
import Modal from "./element.modal";
import State from "./util.state";

export default class Init{
    nav: Nav;
    maze: Maze;
    toaster: Toaster;
    progress: Progress;
    modal: Modal;
    _globalState: State

    constructor() {
        this.nav = new Nav();
        this.maze = new Maze();
        this.toaster = new Toaster();
        this.progress = new Progress();
        this.modal = new Modal();
        this._globalState = new State();
    }

    initialize(){
        this.nav.render();
        this.maze.render();
        this.progress.render();
        this.toaster.render()
        this.modal.render();

        this._globalState.init();
    }
}