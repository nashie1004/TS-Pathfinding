import { HTMLIds } from "./util.constants";

export default class Progress{

    constructor() {
    }

    tempFakeProgress(){
        const progressBar: HTMLElement | null = document.getElementById(HTMLIds.progressBar);
        
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
          <div id="${HTMLIds.progressBar}" class="progress-bar bg-info" style="width: 0%"></div>
        </div>`

        const progress: HTMLElement | null = document.getElementById(HTMLIds.progress);
        progress!.innerHTML = progressContent

        this.tempFakeProgress()
    }
}