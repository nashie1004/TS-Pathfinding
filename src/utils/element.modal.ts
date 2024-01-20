/*
====Modal====
Row size,
Col size,
Random Maze,
 */

import { HTMLIds } from "./util.constants";

export default class Modal{

    constructor() {
    }

    renderModalButton(){
      //
    }
    
    render(){
        const modalContent = `
      
      <!-- Modal -->
      <div class="modal fade " id="${HTMLIds.modalMainId}" tabindex="-1" aria-labelledby="${HTMLIds.modalMainId}Label" aria-hidden="true">
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-header " >
              <h1 class="modal-title fs-5" id="${HTMLIds.modalMainId}Label">More options</h1>
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

              <div class="btn-group me-2 d-flex" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" checked>
                <label class="btn btn-outline-dark" for="btnradio4">Start Node</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
                <label class="btn btn-outline-dark" for="btnradio5">End Node</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio6" autocomplete="off">
                <label class="btn btn-outline-dark" for="btnradio6">Random</label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio7" autocomplete="off">
                <label class="btn btn-outline-dark" for="btnradio7">Random</label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio8" autocomplete="off">
                <label class="btn btn-outline-dark" for="btnradio8">Blank</label>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>`;

        const modal: HTMLElement | null = document.getElementById(HTMLIds.modal);
        
        modal!.innerHTML = modalContent
    }
}