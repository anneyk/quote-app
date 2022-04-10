import { Component, OnInit } from '@angular/core';
import { Quote } from '../../Quote'
import { QUOTES } from '../../mock-quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = QUOTES;
  constructor() { }

  ngOnInit(): void {
  }

}
