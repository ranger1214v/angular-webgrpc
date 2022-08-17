import { Component, OnInit } from '@angular/core';
import { Log } from 'proto/generated/proto/action_pb';
import { ToDoServiceClient } from 'proto/generated/proto/action_pb_service';

@Component({
  selector: 'app-client-streaming',
  templateUrl: './client-streaming.component.html',
  styleUrls: ['./client-streaming.component.scss']
})
export class ClientStreamingComponent implements OnInit {

  public clientWeb = new ToDoServiceClient('https://node-grpc-envoy-dnz3lqp74q-de.a.run.app');

  public clientStreaming = this.clientWeb.clientStreamingAddLog();

  constructor() { }

  ngOnInit(): void {

  }

  async _btnSendLog($event: MouseEvent) {
    const log = new Log();
    log.setCategory('website');
    log.setAction('click');
    log.setLabel(navigator.userAgent);
    log.setValue(`${$event.x} , ${$event.y}`);
    console.log(log.toObject());
    this.clientStreaming.write(log).write(log);
  }

}
