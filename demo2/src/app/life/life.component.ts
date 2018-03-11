import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

let logIndex: number = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  name: string;


  logIt(msg: string) {
    console.log(logIndex + ' :' + msg);
    logIndex++;

  }

  ngOnChanges(changes: SimpleChanges): void {

    let name = changes['name'].currentValue;
    this.logIt('name attribute in on ngOncChanges is :' + name);


  }

  ngDoCheck(): void {

    this.logIt('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.logIt('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logIt('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.logIt('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.logIt('ngAfterViewChecked');
  }

  ngOnDestroy(): void {

    this.logIt('ngOnDestroy');
  }


  constructor() {
    this.logIt('name attribute is in constructure is :' + name);

  }

  ngOnInit() {

    this.logIt('onOninit');

  }

}