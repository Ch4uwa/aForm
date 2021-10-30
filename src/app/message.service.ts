import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  /* Service to handle message display */
  messages: string[] = [];

  constructor() {}

  // add messages to the cache
  add(message: string) {
    this.messages.push(message);
  }

  // clear the cache of messages
  clear() {
    this.messages = [];
  }
}
