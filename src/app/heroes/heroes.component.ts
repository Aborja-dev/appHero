import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]
  selectedHero?: Hero
  constructor(
    private _hero: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes()
  }
  onSelectHero(hero: Hero):void {
    this.selectedHero= hero
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes(): void{
    this._hero.getHeroes()
      .subscribe( data=>{this.heroes = data})
  }
}
