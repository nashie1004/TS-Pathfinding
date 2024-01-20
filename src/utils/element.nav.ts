export default class Nav{
    navId: string;
    algorithms: string[];

    constructor() {
        this.navId = "nav";
        this.algorithms = ["DFS", "BFS", "A Star", "Dijkstra"]        
    }

    showDropdownAlgorithms(): string{
        let dropdownOptions = "";

        for(let item of this.algorithms){
            const li = `<li><a class="dropdown-item">${item}</a></li>`
            dropdownOptions += li;
        }

        return dropdownOptions;
    }

    render(){
        const navContent = `<div class="container-fluid">

            <a class="navbar-brand" href="#">Path Finding Algorithm Visualizer</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <select style="max-width: 200px;" class="form-select me-auto" aria-label="Algorithm Options">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            
            <div class="">
                <button type="button" class="btn btn-danger me-1 text-liht">Reset Grid</button>
                <button type="button" class="btn btn-light">Visualize Algorithm</button>
            </div>

            </div>
        </div>`

        const nav: HTMLElement | null = document.getElementById(this.navId);
        nav?.setAttribute('data-bs-theme', 'dark');
        nav?.classList.add("navbar", "navbar-expand-lg", "bg-body-tertiary", "bg-dark")
        nav!.innerHTML = navContent
    }
}