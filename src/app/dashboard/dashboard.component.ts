import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []
  constructor(
    private _hero: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes()
  }
  getHeroes(): void {
    this._hero.getHeroes().subscribe( heroes=>{this.heroes = heroes.slice(1,5)} )
  }

}
