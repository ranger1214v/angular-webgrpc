import { Component, OnDestroy, OnInit } from '@angular/core';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Member } from 'proto/generated/proto/action_pb';
import { ToDoServiceClient } from 'proto/generated/proto/action_pb_service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-server-streaming',
  templateUrl: './server-streaming.component.html',
  styleUrls: ['./server-streaming.component.scss']
})
export class ServerStreamingComponent implements OnInit, OnDestroy {

  public clientWeb = new ToDoServiceClient(environment.envoySettings.prodUrl);

  public list: Member.AsObject[] = [];

  public listStreaming = this.clientWeb.serverStreamingSubMemberRecord(new Empty());

  constructor() { }

  ngOnInit(): void {

    console.log('serverStreamingSubMemberRecord =>', 'start');
    this.listStreaming.on('data', (data) => {
      console.log('serverStreamingSubMemberRecord =>', data.toObject());
      this.list.unshift(data.toObject());
    });

    this.listStreaming.on('end', (members) => {
      console.log('serverStreamingSubMemberRecord End =>', members);
    });

  }

  ngOnDestroy(): void {
    this.listStreaming.cancel();
  }

}
