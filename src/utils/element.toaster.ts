import { HTMLIds } from "./util.constants";

export default class Toaster{
    toasterId: string;
    toasterBodyId: string;
    toasterBodyTextId: string;

    constructor() {
        this.toasterId = HTMLIds.toaster;
        this.toasterBodyId = HTMLIds.toasterBody;
        this.toasterBodyTextId = HTMLIds.toasterBody
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
        
    }
}