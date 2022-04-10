import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quote } from '../Quote';
import { QUOTES } from '../mock-quotes';



@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() { }

  getQuotes(): Observable<Quote[]> {
    const quotes = of(QUOTES);
    return quotes;
  }
}