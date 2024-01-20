interface IAlgorithmsOptions{
    value: number,
    name: string
}
interface INavBtnsIds{
    startNodeBtnId: "startNodeBtn",
    endNodeBtnId: "endNodeBtn",
    wallNodeBtnId: "wallNodeBtn",
    resetBtnId: "resetBtn",
    visualizeBtnId: "visualizeBtn",
    moreOptionsBtnId: "moreOptionsBtn"
}

export default class Nav{
    navId: string;
    algorithms: IAlgorithmsOptions[];
    moreOptionsId: string;
    modalMainId: string;
    btnIds: INavBtnsIds

    constructor() {
        this.navId = "nav";
        this.algorithms = [
            { name: "Depth-First Search", value: 1 },
            { name: "Breadth-First Search", value: 2 },
            { name: "A*", value: 3 },
            { name: "Dijkstra", value: 4 },
        ]        
        this.moreOptionsId = "moreOptionsBtn";
        this.modalMainId = "tsModal";
        this.btnIds = {
            startNodeBtnId: "startNodeBtn",
            endNodeBtnId: "endNodeBtn",
            wallNodeBtnId: "wallNodeBtn",
            resetBtnId: "resetBtn",
            visualizeBtnId: "visualizeBtn",
            moreOptionsBtnId: "moreOptionsBtn"
        }
    }

    showDropdownAlgorithms(): string{
        let dropdownOptions = "";

        for(const item of this.algorithms){
            const li = `<option value="${item.value}" class="">
            ${item.name}</option>`
            dropdownOptions += li;
        }

        return dropdownOptions;
    }

    render(){
        const navContent = `<div class="container-fluid">

            <a class="navbar-brand" >Path Finding Algorithm Visualizer</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">

                <select style="max-width: 200px;" class="form-select me-auto" aria-label="Algorithm Options">
                    ${this.showDropdownAlgorithms()}
                </select>
                
                <div class="">

                    <div class="btn-group me-2" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="${this.btnIds.startNodeBtnId}" autocomplete="off" checked>
                        <label class="btn btn-success" for="${this.btnIds.startNodeBtnId}">Start Node</label>

                        <input type="radio" class="btn-check" name="btnradio" id="${this.btnIds.endNodeBtnId}" autocomplete="off">
                        <label class="btn btn-success" for="${this.btnIds.endNodeBtnId}">End Node</label>

                        <input type="radio" class="btn-check" name="btnradio" id="${this.btnIds.wallNodeBtnId}" autocomplete="off">
                        <label class="btn btn-success" for="${this.btnIds.wallNodeBtnId}">Wall Node</label>
                    </div>

                    <div class="btn-group me-2" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="${this.btnIds.resetBtnId}" autocomplete="off">
                        <label class="btn btn-light" for="${this.btnIds.resetBtnId}">Reset</label>
                        <input type="radio" class="btn-check" name="btnradio" id="${this.btnIds.visualizeBtnId}" autocomplete="off">
                        <label class="btn btn-light" for="${this.btnIds.visualizeBtnId}">Visualize</label>
                    </div>

                    <button id="${this.btnIds.moreOptionsBtnId}" data-bs-toggle="modal" data-bs-target="#${this.modalMainId}"
                    type="button" class="btn btn-secondary me-1">More options</button>
                </div>
                </div>

            </div>
        </div>`

        const nav: HTMLElement | null = document.getElementById(this.navId);
        nav?.setAttribute('data-bs-theme', 'dark');
        nav?.classList.add("navbar", "navbar-expand-lg", "bg-body-tertiary", "bg-dark")
        nav!.innerHTML = navContent
    }
}