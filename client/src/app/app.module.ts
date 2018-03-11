import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { StockComponent } from './stock/stock.component';
import { WebSocketComponent } from './web-socket/web-socket.component';
import {WebSocketService} from './shared/web-socket.service';


@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    WebSocketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
