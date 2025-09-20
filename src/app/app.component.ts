import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:false
})
export class AppComponent {
  title = 'vianoor-base';

  openEnquiry(){
    try {
      document.getElementById("c-enq")?.classList.add('display-enq');
    } catch (error) {
      
    }
  }

  closeEnq(){
    try {
      document.getElementById("c-enq")?.classList.remove('display-enq');
    } catch (error) {
      
    }
  }

}
