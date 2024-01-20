declare var bootstrap: any;

interface IToaster{
    message: string,
    elementId: string
}

export default class Toaster{
    toasterId: string;
    toasterBodyId: string;
    toasterBtnToggles: IToaster[];
    toasterBodyTextId: string;

    constructor() {
        this.toasterId = "toaster";
        this.toasterBodyId = "liveToast";
        this.toasterBtnToggles = [
            {message: "Grid Reset Successfully!", elementId: "resetBtn" },
            {message: "Visualizing Algorithm...", elementId: "visualizeBtn" },

            {message: "Start Node Picked!", elementId: "startNodeBtn" },
            {message: "End Node Picked!", elementId: "endNodeBtn" },
            {message: "Wall Node Picked!", elementId: "wallNodeBtn" },

        ];
        this.toasterBodyTextId = "toastBody"
    }

    enableToasterJS(){
        const toastLiveExample = document.getElementById(this.toasterBodyId)
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

        for(let btn of this.toasterBtnToggles){
            document.getElementById(btn.elementId)!.addEventListener("click", () => {
                toastBootstrap.show()
                document.getElementById(this.toasterBodyTextId)!.textContent = btn.message
            })
        }

    }

    render(){
        const toasterContent = `
        <div class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
          <div id="liveToast" class="toast text-bg-dark" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body" id="${this.toasterBodyTextId}">
                    <!-- Content here -->
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>`;
        
        const toaster: HTMLElement | null = document.getElementById(this.toasterId);
        toaster!.innerHTML = toasterContent
        
        this.enableToasterJS();
    }
}