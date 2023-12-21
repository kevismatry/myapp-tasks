import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonState } from '../../models/PersonState,model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola!';
  tasks = signal([
    'Instalar el Angular CLI',
    'crear proyecto',
    'crear componentes',
    'crear servicio',
  ]);
  name = signal('kevin');
  age = 24;
  disabled = true;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  person = signal({
    name: 'kevin',
    age: '20',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  });

  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50, {
    nonNullable: true
  });
  nameCtrl = new FormControl('kevin', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  });

  constructor() {
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  isAdult(age: string): boolean {
    const ageNumber = parseInt(age, 10)
    return ageNumber > 18
  }

  clickHandler(){
    alert('hola')
  }
    changeHandle(event: Event){
      const input = event.target as HTMLInputElement;
      const newValue = input.value;
      this.name.set(newValue);
    }
    keydownHandler(event: KeyboardEvent) {
       const input = event.target as HTMLInputElement;
       console.log(input.value);
    }

    changeAge(event: Event){
      const input = event.target as HTMLInputElement;
      const newValue = input.value;
      this.person.update((prevState: PersonState) => {
        return {
          ...prevState,
          age: newValue,
        };
      });
    }
    changeName(event: Event){
      const input = event.target as HTMLInputElement;
      const newValue = input.value;
      this.person.update((prevState: PersonState) => {
        return {
          ...prevState,
          name: newValue,
        };
      });
    }
}
