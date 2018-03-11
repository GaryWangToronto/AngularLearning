import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RedBorderComponent} from './red-border/red-border.component';
import {Child2Component} from './child2/child2.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';


var routerConfig: Routes = [
  {path: '', component: RedBorderComponent},
  {path: 'child2', component: Child2Component}

];

@NgModule({
  declarations: [
    AppComponent,
    RedBorderComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
