import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../Quote';


@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = 'http://localhost:5000/quotes';

  constructor(private http:HttpClient) {}

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.apiUrl);
  }
  deleteQuote(quote: Quote): Observable<Quote> {
    const url = `${this.apiUrl}/${quote.quote}`;
    return this.http.delete<Quote>(url);
  }
}