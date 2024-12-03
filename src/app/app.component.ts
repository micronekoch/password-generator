import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'password-generator';
  colorMode = 'light';
  
  changeColorMode() {
    if (this.colorMode === 'light') {
      this.colorMode = 'dark';
    } else {
      this.colorMode = 'light';
    }
  }
}
