import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent {

  showModal: boolean = false;

  toggleModalDisplay() {
    this.showModal = !this.showModal;
  }

}
