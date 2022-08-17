import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Filter, Item } from 'proto/generated/proto/action_pb';
import { ToDoServiceClient } from 'proto/generated/proto/action_pb_service';
import { BehaviorSubject, Subject } from 'rxjs';
import { scan, tap, } from 'rxjs/operators';

@Component({
  selector: 'app-bidirectional-streaming',
  templateUrl: './bidirectional-streaming.component.html',
  styleUrls: ['./bidirectional-streaming.component.scss']
})
export class BidirectionalStreamingComponent implements OnInit {
  @ViewChild('listBox', { static: true }) listBox: ElementRef | undefined;

  public clientWeb = new ToDoServiceClient('https://node-grpc-envoy-dnz3lqp74q-de.a.run.app');

  public name$ = new BehaviorSubject('沒有名字');
  public messageItem$ = new Subject<Item.AsObject>();
  public messageList$ = this.messageItem$.pipe(
    scan((current: Item.AsObject[], newItem: Item.AsObject) => [...current, newItem], []),
  );

  constructor() {
  }

  async ngOnInit() {
    this.name$.next(localStorage.getItem('name') ?? prompt('請輸入你的名字') ?? '沒有名字');
    localStorage.setItem('name', this.name$.value);

    const filter = new Filter();
    this.clientWeb.serverStreamingSubList(filter).on('data', (resultItem) => {
      const result = resultItem.toObject();
      console.log('serverStreamingSubList ,result=>', result);
      this.messageItem$.next(result);
    });

    this.clientWeb.serverStreamingSubList(filter).on('end', () => alert('與聊天室連線已中斷'));

    this.clientWeb.bidirectionalStreamingAsyncList().on('data', (resultItem) => {
      const result = resultItem.toObject();
      console.log('bidirectionalStreamingAsyncList ,result=>', result);
    });

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
    this.clientWeb.bidirectionalStreamingAsyncList().write(item);
  }

  scrollToBottom = (elm: HTMLElement) => {
    elm.scrollTo({ top: elm.scrollHeight });
  };

}
