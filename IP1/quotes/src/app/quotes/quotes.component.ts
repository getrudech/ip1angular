import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] = [
    new Quotes(1, 'Let your light shine', 'Fin bygo'),
    new Quotes(2,'We can, we will and we must','Liz Ngure'),
    new Quotes(3,'Let your heartbelieve it and you will achieve it','Nimo Banks'),
    new Quotes(4,'Get Dog Food','Pupper likes expensive snacks'),
    new Quotes(5,'Solve math homework','Damn Math'),
    new Quotes(6,'Plot my world domination plan','Cause I am an evil overlord'),
  ];

  toggleDetails(index: any){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
