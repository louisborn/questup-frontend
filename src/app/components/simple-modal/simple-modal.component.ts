import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() content: string = '';
  @Input() buttonText: string = '';

  @Output() closeModalEvent: EventEmitter<string> = new EventEmitter<string>;

  emitCloseModalEvent() {
    this.closeModalEvent.emit('close');
  }
}
