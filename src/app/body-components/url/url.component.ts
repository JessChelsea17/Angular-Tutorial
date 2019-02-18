import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {
  pokemon: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPokemon();
    
  }
  getPokemon() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/1/').subscribe((data: any) => {
        this.pokemon = data.moves.slice(0,10);
    });
  }
}
