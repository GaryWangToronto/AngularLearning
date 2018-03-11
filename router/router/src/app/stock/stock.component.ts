import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  private stock: Stock;

  private isPro: boolean;

  private focus: boolean = false;

  constructor(private routerInfo: ActivatedRoute) {
  }

  ngOnInit() {

    this.routerInfo.data.subscribe((data: {stock: Stock}) => {
      this.stock = data.stock;
    });
    this.isPro = this.routerInfo.snapshot.data[0]['isPro'];
  }

  isFocus(){

    return this.focus;

  }

}

export class Stock {
  constructor(public id:number, public name:string){

  }
}
