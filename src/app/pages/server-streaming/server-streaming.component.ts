import { Component, OnInit } from '@angular/core';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Member } from 'proto/generated/proto/action_pb';
import { ToDoServiceClient } from 'proto/generated/proto/action_pb_service';

@Component({
  selector: 'app-server-streaming',
  templateUrl: './server-streaming.component.html',
  styleUrls: ['./server-streaming.component.scss']
})
export class ServerStreamingComponent implements OnInit {

  public clientWeb = new ToDoServiceClient('https://node-grpc-envoy-dnz3lqp74q-de.a.run.app');

  public list: Member.AsObject[] = [];

  constructor() { }

  ngOnInit(): void {

    const empty: Empty = new Empty();
    console.log('serverStreamingSubMemberRecord =>', 'start');
    this.clientWeb.serverStreamingSubMemberRecord(empty).on('data', (data) => {
      console.log('serverStreamingSubMemberRecord =>', data.toObject());
      this.list.unshift(data.toObject());
    });

    this.clientWeb.serverStreamingSubMemberRecord(empty).on('end', (members) => {
      console.log('serverStreamingSubMemberRecord End =>', members);
    });

  }

}
