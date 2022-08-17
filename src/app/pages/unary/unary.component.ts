import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Member } from 'proto/generated/proto/action_pb';
import { ToDoServiceClient } from 'proto/generated/proto/action_pb_service';

@Component({
  selector: 'app-unary',
  templateUrl: './unary.component.html',
  styleUrls: ['./unary.component.scss']
})
export class UnaryComponent implements OnInit {

  public clientWeb = new ToDoServiceClient('https://node-grpc-envoy-dnz3lqp74q-de.a.run.app');
  public memberList = ['ranger', 'mike', 'jeff', 'jimmy', 'ghost'];

  public name = '';
  public type = 0;


  constructor() { }

  ngOnInit(): void {
  }

  async _btnSendMemberRecord() {
    const member = new Member();
    member.setName(this.name);
    member.setType(++this.type);
    member.setTimestamp(moment().format('YYYY-MM-DD HH:mm:ss'));
    this.clientWeb.unaryAddMemberRecord(member, (err, response) => {
      console.log('clientWeb.unaryAddMemberRecord End', { response, err });
      alert('已新增紀錄');
    });
  }

}
