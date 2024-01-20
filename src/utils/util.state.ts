import { HTMLIds } from "./util.constants";

declare var bootstrap: any;

interface IToaster{
    message: string,
    elementId: string
}

export default class State{
    toasterBtnToggles: IToaster[];
    toasterBodyTextId: string;
    toasterBodyId: string;
    buttonClickedId: string;
    algoSelected: string;

    constructor() {
        this.toasterBodyTextId = HTMLIds.toasterBodyText
        this.toasterBodyId = HTMLIds.toasterBody
        this.toasterBtnToggles = [
            {message: "Grid Reset Successfully!", elementId: HTMLIds.navReset.toString() },
            {message: "Visualizing Algorithm...", elementId: HTMLIds.navVisualize.toString() },
            {message: "Start Node Picked!", elementId: HTMLIds.navStartNode.toString() },
            {message: "End Node Picked!", elementId: HTMLIds.navEndNode.toString() },
            {message: "Wall Node Picked!", elementId: HTMLIds.navWallNode.toString() },
        ];
        this.buttonClickedId = "";
        this.algoSelected = HTMLIds.navSelect
    }

    getAlgoSelected(){
        const select: HTMLElement | null = document.getElementById(this.algoSelected);
        console.log(select)
    }

    setToasterClickEvents(){
        const toastLiveExample = document.getElementById(this.toasterBodyId)
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

        for(let btn of this.toasterBtnToggles){
            document.getElementById(btn.elementId)!.addEventListener("click", () => {
                toastBootstrap.show()
                document.getElementById(this.toasterBodyTextId)!.textContent = btn.message
            })
        }
    }

    setListenGridMovement(){

    }

    init(){
        this.setToasterClickEvents();
        this.getAlgoSelected()
    }
}