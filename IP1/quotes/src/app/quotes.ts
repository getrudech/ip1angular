export class Quotes {
   
  
  showAuthor: boolean;
  constructor(public id: number,public title: string,public quote: string,public author: string,public upvotes: number,public downvotes: number){
    this.showAuthor=false;
  };
}
