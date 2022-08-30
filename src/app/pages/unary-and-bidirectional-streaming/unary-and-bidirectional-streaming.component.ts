import { Component, OnDestroy, OnInit } from '@angular/core';
import { Filter, Item } from 'proto/generated/proto/action_pb';
import { ToDoServiceClient } from 'proto/generated/proto/action_pb_service';
import { BehaviorSubject, Subject } from 'rxjs';
import { scan, } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-unary-and-bidirectional-streaming',
  templateUrl: './unary-and-bidirectional-streaming.component.html',
  styleUrls: ['./unary-and-bidirectional-streaming.component.scss']
})
export class UnaryAndBidirectionalStreamingComponent implements OnInit, OnDestroy {

  public clientWeb = new ToDoServiceClient(environment.envoySettings.prodUrl);

  public name$ = new BehaviorSubject('沒有名字');
  public messageItem$ = new Subject<Item.AsObject>();
  public messageList$ = this.messageItem$.pipe(
    scan((current: Item.AsObject[], newItem: Item.AsObject) => [...current, newItem], []),
  );

  public chatroomStreaming = this.clientWeb.serverStreamingSubList(new Filter());

  constructor() { }

  async ngOnInit() {
    this.name$.next(localStorage.getItem('name') ?? prompt('請輸入你的名字') ?? '沒有名字');
    localStorage.setItem('name', this.name$.value);

    const filter = new Filter();
    this.chatroomStreaming.on('data', (resultItem) => {
      const result = resultItem.toObject();
      console.log('result=>', result);
      this.messageItem$.next(result);
    });

    this.chatroomStreaming.on('end', () => alert('與聊天室連線已中斷'));

  }

  ngOnDestroy(): void {
    this.chatroomStreaming.cancel();
  }

  /**
   * 傳送訊息
   * @param message
   */
  btnSendMessage(message: string) {
    const name = this.name$.value;
    const item = new Item();
    item.setName(name);
    item.setMessage(message);
    this.clientWeb.unaryAddItem(item, (err, response) => console.log('clientWeb.unaryAddItem End', { response, err }));
  }

  scrollToBottom = (elm: HTMLElement) => {
    elm.scrollTo({ top: elm.scrollHeight });
  };

}
