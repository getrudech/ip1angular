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
    {id:1, quote:'Watch finding Nemo',author:'Find an online version and watch merlin find his son'},
    {id:2,quote:'Buy Cookies',author:'I have to buy cookies for the parrot'},
    {id:3,quote:'Get new Phone Case',author:'Diana has her birthday coming up soon'},
    {id:4,quote:'Get Dog Food',author:'Pupper likes expensive sancks'},
    {id:5,quote:'Solve math homework',author:'Damn Math'},
    {id:6,quote:'Plot my world domination plan',author:'Cause I am an evil overlord'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
