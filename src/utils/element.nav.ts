interface IAlgorithmsOptions{
    value: number,
    name: string
}

export default class Nav{
    navId: string;
    algorithms: IAlgorithmsOptions[];
    moreOptionsId: string;
    visualizeBtnId: string;
    resetBtnId: string;
    modalMainId: string;

    constructor() {
        this.navId = "nav";
        this.algorithms = [
            { name: "Depth-First Search", value: 1 },
            { name: "Breadth-First Search", value: 2 },
            { name: "A*", value: 3 },
            { name: "Dijkstra", value: 4 },
        ]        
        this.moreOptionsId = "moreOptionsBtn";
        this.visualizeBtnId = "visualizeBtn";
        this.resetBtnId = "resetBtn";
        this.modalMainId = "tsModal";
    }

    showDropdownAlgorithms(): string{
        let dropdownOptions = "";

        for(let item of this.algorithms){
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
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                        <label class="btn btn-success" for="btnradio1">Start Node</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                        <label class="btn btn-success" for="btnradio2">End Node</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                        <label class="btn btn-success" for="btnradio3">Wall Node</label>
                    </div>


                    <button id="${this.moreOptionsId}" data-bs-toggle="modal" data-bs-target="#${this.modalMainId}"
                    type="button" class="btn btn-secondary me-1">More options</button>
                    <button id="${this.resetBtnId}" type="button" class="btn btn-info me-1 text-liht">Reset Grid</button>
                    <button id="${this.visualizeBtnId}" type="button" class="btn btn-light">Visualize Algorithm</button>
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