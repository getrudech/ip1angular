import { Quote } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quote: Quotes = new Quotes(0,"","","",0,0);
  

  quotes:Quotes[] = [
    new Quotes(1,"Cow", 'Let your light shine', 'Fin bygo',0,0),
    new Quotes(2,"Cow",'We can, we will and we must','Liz Ngure',0,0),
    new Quotes(3,"Cow",'Let your heartbelieve it and you will achieve it','Nimo Banks',0,0),
    new Quotes(4,"Cow",'My dress my choice','Kenyans',0,0),
    new Quotes(5,"Cow",'Mambo sawasawa','Mike Kinyanjui',0,0),
    new Quotes(6,"Cow",'Knock and the door shall be opened unto you','Mathew',0,0),
  ];

  toggleDetails(index: any){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  completeQuote(isComplete: any, index: any){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  addUpvote(index:number){
    this.quotes[index].upvotes +=1;
  }
  addDownvote(index:number){
    this.quotes[index].downvotes +=1;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
