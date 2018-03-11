import { Injectable } from '@angular/core';
import {Stock, StockService} from './stock.service';
import {LoggerService} from './logger.service';

@Injectable()
export class AnotherStockService implements StockService{



  getStock(): Stock {
    return new Stock(2,'MicroSoft')
  }

  constructor(public  logger: LoggerService) { }

}
