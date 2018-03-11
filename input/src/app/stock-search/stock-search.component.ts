import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent implements OnInit {

  @Input()
  private keyWord: string;

  private price: number;

  @Output('lastPrice')
  searchResult: EventEmitter<StockInfo> = new EventEmitter();

  @Output()
  addCart: EventEmitter<StockInfo> = new EventEmitter();

  constructor() {


  }

  buyStock() {

    this.addCart.emit(new StockInfo(this.keyWord, this.price));

  }

  ngOnInit() {
    setInterval(() => {

      let stockInfo: StockInfo = new StockInfo(this.keyWord, 100 * Math.random());
      this.price = stockInfo.price;

      this.searchResult.emit(stockInfo);

    }, 3000);
  }

}


export class StockInfo {

  constructor(public  name: string, public price: number) {

  }

}
