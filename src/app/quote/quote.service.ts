import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Quote } from '../quote';

@Injectable({
    providedIn: 'root'
})
export class QuoteService{

    quotes: Quote[] = [  
        new Quote(uuid(),'You never really understand a person until you consider things from his point of view. Until you climb inside of his skin and walk around in it.', 'Harper Lee',0,0,'Annet Khavere',new Date(2000,7,5),false),
        new Quote(uuid(),'There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.', 'Ernest Hemingway',0,0,'Annet Khavere',new Date(2021,3,9),false),
        new Quote(uuid(),'I was never afraid of failure; for I would sooner fail than not be among the greatest.', 'John Keats',0,0,'Annet Khavere',new Date(2010,5,21),false),
        new Quote(uuid(),'If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.', 'Henry David Thoreau',0,0,'Annet Khavere',new Date(2005,2,16),false),
    ];

    getQuotes(){
        return this.quotes;
    }

    addQuote(quote:any){
        quote.id           = uuid();
        quote.quote        = quote.quote;
        quote.author       = quote.author;
        quote.upvotes      = 0;
        quote.downvotes    = 0;
        quote.submitted_by = quote.submitted_by;
        quote.created_at   = new Date(quote.created_at);
        quote.isFavorite   = false;
        this.quotes.unshift(quote);
    }

    toggleQuoteDetails(quote:any,show:boolean){
        this.getQuotes().indexOf(quote) >= 0 ? this.getQuotes()[this.getQuotes().indexOf(quote)].showQuoteDetails = show : this.getQuotes()[this.getQuotes().indexOf(quote)].showQuoteDetails = false;
    }

    voteQuote(quote:any,type:number){
        if(this.getQuotes().indexOf(quote) >= 0){
            type === 0 ? this.getQuotes()[this.getQuotes().indexOf(quote)].upvotes++ : this.getQuotes()[this.getQuotes().indexOf(quote)].downvotes++;
            this.rankQuotes(); 
        }
    }

    rankQuotes(): void{
        let upvoted: number   = Math.max.apply(Math,this.getQuotes().map(function(chosen){return chosen.upvotes;}));
        if( upvoted > 0){
            let upvotedQuote: any = this.getQuotes().find(function(selected){ return selected.upvotes == upvoted; });
            let favIndex: number  = this.getQuotes().indexOf(upvotedQuote);
            this.getQuotes().map((quote)=>{
                if(favIndex === this.getQuotes().indexOf(quote)){
                    this.quotes[favIndex].isFavorite = true;
                }else{
                    quote.isFavorite = false;
                }
            });
        }
    }

    deleteQuote(quote:any){
        if(this.getQuotes().indexOf(quote)>= 0){
            let toDelete = confirm(`Are you sure you want to delete the quote: ${this.quotes[this.quotes.indexOf(quote)].quote}?`)
            if(toDelete){
                this.getQuotes().splice(this.getQuotes().indexOf(quote),1);
            }
        }
        this.rankQuotes();
    }
}
