import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
import { QuotesComponent } from '../quotes/quotes.component';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quotes!: Quotes;
/*   @Input() quote_data : any;
 */  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
