import { Hero } from './../hero';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero
  constructor() { }

  ngOnInit(): void {
  }

}
