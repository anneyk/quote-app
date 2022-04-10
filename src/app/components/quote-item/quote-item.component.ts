import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../../Quote'
@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
   
  @Input() quote!: Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
