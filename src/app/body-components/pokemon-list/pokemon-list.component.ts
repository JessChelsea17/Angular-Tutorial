import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { PokemonModel, Pokemon } from '../../pokemon-model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  list: Pokemon[] = [];

  constructor(private service: PokemonService) { }

  ngOnInit() {
    this.getPokemonList();
    
  }

  getPokemonList() {
    this.service.getPokemonList().subscribe((data: PokemonModel) => {
      this.list = data.results;
      console.log('list: ', this.list);
    });
  }
}
