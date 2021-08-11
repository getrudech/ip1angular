export class Quotes {
   
  
  showAuthor: boolean;
  constructor(public id: number,public quote: string,public author: string){
    this.showAuthor=false;
  }
}
