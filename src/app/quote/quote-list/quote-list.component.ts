import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit{
  @Input() quotelist;
  @Output() deleteQuote = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  delete(list) {
    this.deleteQuote.emit(list);
  }

  voteup(list) {
    list.rating++;
  }

  votedown(list) {
    list.rating--;
  }

}
