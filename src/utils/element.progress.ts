import { HTMLIds } from "./util.constants";

export default class Progress{
    progressId: string;
    progressBarId: string;

    constructor() {
        this.progressId = HTMLIds.progress;   
        this.progressBarId = HTMLIds.progressBar     
    }

    tempFakeProgress(){
        const progressBar: HTMLElement | null = document.getElementById(this.progressBarId);
        
        let i: number = 0;
        const id = setInterval(() => {
            if (i >= 100){
                i = 0;
                //clearInterval(id)
            }
            else
            {
                i++;
                progressBar!.style.width = `${i}%`;
            }
            //console.log(i)
        }, 100)
    }

    render(){
        const progressContent = `
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 5px">
          <div id="${this.progressBarId}" class="progress-bar bg-info" style="width: 0%"></div>
        </div>`

        const progress: HTMLElement | null = document.getElementById(this.progressId);
        progress!.innerHTML = progressContent

        this.tempFakeProgress()
    }
}