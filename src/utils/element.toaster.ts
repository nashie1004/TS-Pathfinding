import { HTMLIds } from "./util.constants";

export default class Toaster{

    constructor() {
    }

    render(){
        const toasterContent = `
        <div class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
          <div id="liveToast" class="toast text-bg-dark" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body" id="${HTMLIds.toasterBodyText}">
                    <!-- Content here -->
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>`;
        
        const toaster: HTMLElement | null = document.getElementById(HTMLIds.toaster);
        toaster!.innerHTML = toasterContent
        
    }
}