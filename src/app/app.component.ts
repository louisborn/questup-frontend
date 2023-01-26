import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'questup-frontend';

  @HostListener('document:click', ['$event'])
    documentClick(event: MouseEvent) {
        if(event.type == 'click') {
          //update
        }
    }

    @HostListener('document:keypress', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) { 
    console.log(event.key);
  }
}
