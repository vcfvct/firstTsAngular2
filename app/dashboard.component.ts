import { Component , OnInit } from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  styleUrls: ['app/dashboard.component.css'],
  templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private router:Router) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
