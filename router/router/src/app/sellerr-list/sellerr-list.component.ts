import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sellerr-list',
  templateUrl: './sellerr-list.component.html',
  styleUrls: ['./sellerr-list.component.css']
})
export class SellerrListComponent implements OnInit {


  private sellId: number;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {

    this.sellId = this.routeInfo.snapshot.params['id'];

  }

}
