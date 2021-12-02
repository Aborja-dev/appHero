import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Observable, of, scheduled } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private _message: MessageService
  ) {
    
   }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this._message.add('HeroService: fetched heroes')
    return heroes
  }
  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(h=>h.id === id)!
    this._message.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
