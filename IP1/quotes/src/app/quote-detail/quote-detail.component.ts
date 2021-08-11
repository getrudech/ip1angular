import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';
import { QuotesComponent } from '../quotes/quotes.component';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quotes: any
  constructor() { }

  ngOnInit(): void {
  }

}
