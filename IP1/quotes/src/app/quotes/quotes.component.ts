import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Nelson','Mandela', new Date(2021,6,19),0,0),
    new Quote(2,'The way to get started is to quit talking and begin doing. ','Walt','Disney',new Date(2021,6,19),0,0),
    new Quote(3,'Your time is limited, so do not waste it living someone elses life. Do not be trapped by dogma – which is living with the results of other peoples thinking.','Steve','Jobs', new Date(2021,7,19),0,0),
    new Quote(4,'If life were predictable it would cease to be life, and be without flavor.','Eleanor','Roosevelt',new Date(2021,6,19),0,0),
    new Quote(5,'If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough.','Oprah','Winfrey', new Date(2021,7,19),0,0),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
