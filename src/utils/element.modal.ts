/*
====Modal====
Row size,
Col size,
Random Maze,
 */

export default class Modal{
    modalId: string;
    modalMainId: string;

    constructor() {
      this.modalId = "modal"
      this.modalMainId = "tsModal";
    }

    renderModalButton(){
      //
    }
    
    render(){
        const modalContent = `
      
      <!-- Modal -->
      <div class="modal fade " id="${this.modalMainId}" tabindex="-1" aria-labelledby="${this.modalMainId}Label" aria-hidden="true">
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-header " >
              <h1 class="modal-title fs-5" id="${this.modalMainId}Label">More options</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <fieldset>
                <legend>Layout</legend>

                <div class="">
                  <label for="customRange1" class="form-label">Rows </label>
                  <input type="range" class="form-range" id="customRange1">
                </div>
                <div class="">
                  <label for="customRange2" class="form-label">Columns </label>
                  <input type="range" class="form-range" id="customRange2">
                </div>

              </fieldset>

              <fieldset>
                <legend>Maze</legend>
              </fieldset>

              <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
                <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

                <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
                <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

                <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
                <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>`;

        const modal: HTMLElement | null = document.getElementById(this.modalId);
        
        modal!.innerHTML = modalContent
    }
}