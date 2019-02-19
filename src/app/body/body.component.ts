import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonModel, Pokemon  } from '../pokemon.model';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Output() valueChange = new EventEmitter();

  public textResult: string = 'Hello';
  public name: string = 'Jess'
  selectColor: string = "green"
  isHidden: boolean = false;

  counter: number = 0;

  list: any[] = [
    {
      name: 'Jess',
      age: '18'
    },
    {
      name: 'Omar',
      age: '15'
    }
  ];

  constructor() { }

  ngOnInit() { }

  submit() {
    this.textResult = 'Goodbye'
    this.selectColor = 'yellow';
    this.isHidden = true;
  }

  setColor(): object {
    return {'background-color': this.selectColor};
   }

   valueChanged() {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
   }
}
