import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {


  @Input()
  stockName: string;

  @Input()
  stock: { name: string };

  message: string;

  oldStockName: string;

  changeDetected: boolean;

  changeCount: number = 0;


  constructor() {
  }


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log(JSON.stringify(changes, null, 2));

  }

  ngDoCheck(): void {

    if (this.stock.name !== this.oldStockName) {
      this.changeDetected = true;
      console.log('DoCheck: stock.name from ' + this.oldStockName + ' to ' + this.stock.name);
      this.oldStockName = this.stock.name;

    }

    if (this.changeDetected) {
      this.changeCount = 0;
    } else {
      this.changeCount++;
      console.log('DoCheck: stock.name do not change, ngDoCheck method called ' + this.changeCount);
    }

    this.changeDetected = false;

  }


}
