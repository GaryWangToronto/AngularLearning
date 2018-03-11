import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked, AfterViewInit {

  message:string;

  ngAfterViewInit(): void {

    console.log('parent component view initialize completed');

    setTimeout(()=>{
      this.message = "Hello";
    },0);


  }

  ngAfterViewChecked(): void {

    console.log('parent component view changed detected completed');


  }


  @ViewChild('child1')
  child1: ChildComponent;


  ngOnInit(): void {

    setInterval(() => {
      this.child1.greeting('Tom');
    }, 5000);


  }


}
