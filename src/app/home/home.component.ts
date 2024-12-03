import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private formBuilder = inject(FormBuilder);
  public generatedPassword = "";

  generatorForm = this.formBuilder.group({
    passwordLength: [8],
    symbols: ["0123456789abcd"],
  });

  generatePassword() {
    let generated = "";

    if (!this.generatorForm.value.passwordLength) {
      return;
    }
    if (!this.generatorForm.value.symbols) {
      return;
    }

    for (let i = 0; i < this.generatorForm.value.passwordLength; i++) {
      const position = Math.floor(Math.random() * this.generatorForm.value.symbols.length);
      generated += this.generatorForm.value.symbols.substring(position, position + 1);
    }

    this.generatedPassword = generated;
  }
}
