import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,AfterViewChecked, AfterViewInit {


  ngAfterViewInit(): void {

    console.log('sub component view initialize completed');

  }

  ngAfterViewChecked(): void {

    console.log('sub component view changed detected completed');

  }


  constructor() {
  }

  ngOnInit() {
  }

  greeting(name: string): void {

    console.log('hello' + name);


  }

}
