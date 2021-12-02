import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]
  constructor(
    private _hero: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes()
  }
  getHeroes(): void{
    this._hero.getHeroes()
      .subscribe( data=>{this.heroes = data})
  }
}
