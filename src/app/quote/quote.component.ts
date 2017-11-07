import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = {
    des: "",
    author: "",
    rating: ""
  }
  quotelist = [];

  addQuote() {
    this.quotelist.push(this.quote);
    this.quote = {
      des: "",
      author: "",
      rating: ""
    }
  }

  dellist(list){
    const idx = this.quotelist.indexOf(list);
    this.quotelist.splice(idx, 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
