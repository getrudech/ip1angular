export class Quotes {
   
  
  showAuthor: boolean;
  constructor(public id: number,public quote: string,public author: string,public upvotes: number,public downvotes: number){
    this.showAuthor=false;
  };
}
