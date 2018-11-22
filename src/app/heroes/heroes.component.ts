import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

// Delete the HEROES import, because you won't need that anymore. Import the HeroService instead.
// import {HEROES} from '../mock-heroes'; // import the mock HEROES.

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'ibrahim salama madi',
    gender: 'Male'
  };

//Add a heroes property to the class that exposes these heroes for binding.
  // heroes = HEROES;
// Replace the definition of the heroes property with a simple declaration.
  heroes: Hero[]; 
  
  selectedHero: Hero;



  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

// Add a getHeroes method to return the mock heroes.

  getHeroes(): void{
    // this.heroes = this.heroService.getHeroes()
    this.heroService.getHeroes().subscribe(heroes=>this.heroes = heroes);
 
  }

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}