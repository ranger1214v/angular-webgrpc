import { Component, OnDestroy, OnInit } from '@angular/core';
import { Log } from 'proto/generated/proto/action_pb';
import { ToDoServiceClient } from 'proto/generated/proto/action_pb_service';
import { environment } from 'src/environments/environment';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-client-streaming',
  templateUrl: './client-streaming.component.html',
  styleUrls: ['./client-streaming.component.scss']
})
export class ClientStreamingComponent implements OnInit, OnDestroy {

  public clientWeb = new ToDoServiceClient(environment.envoySettings.prodUrl);

  public clientStreaming = this.clientWeb.clientStreamingAddLog();

  public sessionId = uuid();

  constructor() { }

  ngOnInit(): void {
    this.clientStreaming.on('end', (status) => console.log('end', status));
    this.clientStreaming.on('status', (status) => console.log('status', status));

  }

  async _btnSendLog($event: MouseEvent) {
    const log = new Log();
    log.setCategory('website');
    log.setAction('click');
    log.setLabel(navigator.userAgent);
    log.setValue(`${$event.x} , ${$event.y}`);
    log.setSessionid(this.sessionId);
    console.log(log.toObject());
    this.clientStreaming.write(log);

  }

  ngOnDestroy(): void {
    // this.clientStreaming.cancel();
  }

}
