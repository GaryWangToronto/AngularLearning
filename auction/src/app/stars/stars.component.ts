import {Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {


  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      this.stars.push(i > this.rating - 1);

    }

  }

  @Input()
  rating: number = 0;

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  stars: boolean[];

  @Input()
  readonly: boolean = true;

  constructor() {
  }

  ngOnInit() {


  }

  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;



      this.ratingChange.emit(this.rating);

    }


  }
}
