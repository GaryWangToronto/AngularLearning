import {AfterContentChecked, AfterContentInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-red-border',
  templateUrl: './red-border.component.html',
  styleUrls: ['./red-border.component.css']
})
export class RedBorderComponent implements OnInit, OnDestroy {


  ngOnDestroy(): void {
    console.log("child component destroyed!");
  }



  constructor() {
  }

  ngOnInit() {
  }



}
