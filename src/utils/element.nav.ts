import { AlgoNames, HTMLIds } from "./util.constants";

interface IAlgorithmsOptions{
    value: string,
    name: string
}

export default class Nav{
    algorithms: IAlgorithmsOptions[];

    constructor() {
        this.algorithms = [
            { name: AlgoNames.algorithmBFS, value: AlgoNames.algorithmBFS },
            { name: AlgoNames.algorithmDFS, value: AlgoNames.algorithmDFS },
            { name: AlgoNames.algorithmAStar, value: AlgoNames.algorithmAStar },
            { name: AlgoNames.algorithmDijkstra, value: AlgoNames.algorithmDijkstra },
        ]        
        
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

                <select id="${HTMLIds.navSelect}" style="max-width: 200px;" class="form-select me-auto" aria-label="Algorithm Options">
                    ${this.showDropdownAlgorithms()}
                </select>
                
                <div class="">

                    <div class="btn-group me-2" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="${HTMLIds.navStartNode}" autocomplete="off" checked>
                        <label class="btn btn-success" for="${HTMLIds.navStartNode}">Start Node</label>

                        <input type="radio" class="btn-check" name="btnradio" id="${HTMLIds.navEndNode}" autocomplete="off">
                        <label class="btn btn-success" for="${HTMLIds.navEndNode}">End Node</label>

                        <input type="radio" class="btn-check" name="btnradio" id="${HTMLIds.navWallNode}" autocomplete="off">
                        <label class="btn btn-success" for="${HTMLIds.navWallNode}">Wall Node</label>
                    </div>

                    <div class="btn-group me-2" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="${HTMLIds.navReset}" autocomplete="off">
                        <label class="btn btn-light" for="${HTMLIds.navReset}">Reset</label>
                        <input type="radio" class="btn-check" name="btnradio" id="${HTMLIds.navVisualize}" autocomplete="off">
                        <label class="btn btn-light" for="${HTMLIds.navVisualize}">Visualize</label>
                    </div>

                    <button id="${HTMLIds.navMoreOptions}" data-bs-toggle="modal" data-bs-target="#${HTMLIds.modalMainId}"
                    type="button" class="btn btn-secondary me-1">More options</button>
                </div>
                </div>

            </div>
        </div>`

        const nav: HTMLElement | null = document.getElementById(HTMLIds.nav);
        nav?.setAttribute('data-bs-theme', 'dark');
        nav?.classList.add("navbar", "navbar-expand-lg", "bg-body-tertiary", "bg-dark")
        nav!.innerHTML = navContent
    }
}