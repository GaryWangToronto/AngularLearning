import {CanDeactivate} from "@angular/router";
import {StockComponent} from "../stock/stock.component";
/**
 * Created by zhailiang on 2017/6/22.
 */
export class FocusGuard implements CanDeactivate<StockComponent> {
  canDeactivate(component: StockComponent) {

    if(component.isFocus()){
      return true;
    }else{
      return window.confirm("不关注就离开么？这股票能赚钱哦.");
    }
  }

}
