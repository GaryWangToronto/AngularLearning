import {Component} from '@angular/core';
import {StockInfo} from './stock-search/stock-search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private stockInfo: StockInfo;

  addCartHandler(stockInfo: StockInfo) {
    this.stockInfo = stockInfo;

  }


}
