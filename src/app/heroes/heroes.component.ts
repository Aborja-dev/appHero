import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES
  selectedHero?: Hero
  constructor() { }

  ngOnInit(): void {
  }
  onSelectHero(hero: Hero):void {
    this.selectedHero= hero
  }
}
