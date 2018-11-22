import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

messages: string[] = [];
// one to add() a message to the cache
add(message: string){
	this.messages.push(message);
}

// two to clear() a message to the cache
clear(){
	this.messages = [];
}

/*
 Modify the constructor with a parameter that declares a private messageService,
 property. Angular will inject the singleton MessageService into that property when,
  it creates the HeroService.
  */
  constructor(private messageService: MessageService) { }
}

