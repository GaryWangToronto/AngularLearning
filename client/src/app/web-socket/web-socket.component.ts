import {Component, OnInit} from '@angular/core';
import {WebSocketService} from '../shared/web-socket.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent implements OnInit {

  constructor(public wsService: WebSocketService) {
  }

  ngOnInit() {

    this.wsService.connect('ws://localhost:8081')
      .subscribe(
        data => console.log(data),
        error => console.log(error),
        () => console.log('server connection is disconnected ')
      );


  }

  send() {
    this.wsService.send('this message is from client');

  }


}
