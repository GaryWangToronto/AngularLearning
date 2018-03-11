import {AfterContentChecked, AfterContentInit, AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit, AfterContentChecked, AfterViewInit {


  ngAfterViewInit(): void {

    console.log('parent component  view shadow initialize completed');
  }


  ngAfterContentInit(): void {

    console.log('parent component shadow initialize completed');
  }

  ngAfterContentChecked(): void {

    console.log('parent component shadow change completed');
  }

  xxx = 'we are value of attribute x';


}
