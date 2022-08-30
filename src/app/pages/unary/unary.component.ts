import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Member } from 'proto/generated/proto/action_pb';
import { ToDoServiceClient } from 'proto/generated/proto/action_pb_service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-unary',
  templateUrl: './unary.component.html',
  styleUrls: ['./unary.component.scss']
})
export class UnaryComponent implements OnInit {

  public clientWeb = new ToDoServiceClient(environment.envoySettings.prodUrl);
  public memberList = ['米奇', '米妮', '唐老鴨', '小飛象', '丁丁', '迪西', '拉拉', '小波', '努努', '阿飄'];

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
