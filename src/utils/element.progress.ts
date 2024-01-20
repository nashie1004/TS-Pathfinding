export default class Progress{
    progressId: string;

    constructor() {
        this.progressId = "progress";        
    }

    tempFakeProgress(){
        const progressBar: HTMLElement | null = document.querySelector(".progress-bar");
        
        let i: number = 0;
        setInterval(() => {
            if (i >= 100){
                i = 0;
            }
            else
            {
                i++;
                progressBar!.style.width = `${i}%`;
            }
            console.log(i)
        }, 100)
    }

    render(){
        const progressContent = `
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 5px">
          <div class="progress-bar" style="width: 0%"></div>
        </div>`

        const progress: HTMLElement | null = document.getElementById(this.progressId);
        progress!.innerHTML = progressContent

        this.tempFakeProgress()
    }
}