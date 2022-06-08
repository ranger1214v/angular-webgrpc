import { Component, OnInit } from '@angular/core';
import { Filter, Item } from 'proto/generated/proto/action_pb';
import { ToDoServiceClient } from 'proto/generated/proto/action_pb_service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-webgrpc';

  constructor() {

  }

  async ngOnInit() {

    const clientWeb = new ToDoServiceClient('http://' + window.location.hostname + ':8080');
    const item = new Item();
    item.setName('web grpc');
    item.setPrice(412);
    console.log('clientWeb.unaryAddItem Start');



    clientWeb.unaryAddItem(item, (err, response) => {
      console.log('clientWeb.unaryAddItem End', { response, err });
    });


    console.log('clientWeb.serverStreamingSubList Start');
    const filter = new Filter();
    clientWeb.serverStreamingSubList(filter).on('data', (resultItem) => {
      console.log('clientWeb.serverStreamingSubList on data => ', resultItem);

      const result = resultItem.toObject();
      console.log('clientWeb.serverStreamingSubList on resultItem.toObject() => ', result);
    });

    clientWeb.serverStreamingSubList(filter).on('end', () => {
      console.log('clientWeb.serverStreamingSubList on end');
    });

  }

}
