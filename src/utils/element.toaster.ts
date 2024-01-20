declare var bootstrap: any;

export default class Toaster{
    toasterId: string;
    toasterBtnId: string;
    toasterBodyId: string;

    constructor() {
        this.toasterId = "toaster";
        this.toasterBtnId = "liveToastBtn";
        this.toasterBodyId = "liveToast";
    }

    enableToasterJS(){
        const toastTrigger = document.getElementById(this.toasterBtnId)
        const toastLiveExample = document.getElementById(this.toasterBodyId)

        if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
        })
        }
    }

    renderButton(){
        //
    }

    render(toasterMsgContent: string = "Test msg"){
        const toasterContent = `<button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>
        <div class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
          <div id="liveToast" class="toast text-bg-primary" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                ${toasterMsgContent}
                Hello, world! This is a toast message.
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>`;
        
        const toaster: HTMLElement | null = document.getElementById(this.toasterId);
        toaster!.innerHTML = toasterContent
        
        this.enableToasterJS();
    }
}