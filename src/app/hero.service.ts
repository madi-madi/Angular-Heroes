import { Injectable } from '@angular/core';
// import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
// Import the Hero and HEROES. 1 
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
// Open the HeroService file and import the Observable and of symbols from RxJS.
import { Observable , of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

// Create a function to retrieve the heroes from the service.
/*
In a later tutorial on HTTP, 
you'll learn that Angular's HttpClient methods return RxJS Observables.
 In this tutorial, 
you'll simulate getting data from the server with the RxJS of() function.
*/
  getHeroes(): Observable<Hero[]> {
  // Todo send the message after feachig the heroes
  this.messageService.add('HeroService: feached heroes');
  return of(HEROES);
  }


}
