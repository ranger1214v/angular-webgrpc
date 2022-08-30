import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Item } from 'proto/generated/proto/action_pb';
import { ToDoServiceClient } from 'proto/generated/proto/action_pb_service';
import { BehaviorSubject, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bidirectional-streaming',
  templateUrl: './bidirectional-streaming.component.html',
  styleUrls: ['./bidirectional-streaming.component.scss']
})
export class BidirectionalStreamingComponent implements OnInit, OnDestroy {
  @ViewChild('listBox', { static: true }) listBox: ElementRef | undefined;

  public clientWeb = new ToDoServiceClient(environment.envoySettings.prodUrl);

  public name$ = new BehaviorSubject('沒有名字');
  public messageItem$ = new Subject<Item.AsObject>();
  public messageList$ = this.messageItem$.pipe(
    scan((current: Item.AsObject[], newItem: Item.AsObject) => [...current, newItem], []),
  );

  public bid = this.clientWeb.bidirectionalStreamingAsyncList();

  constructor() {
  }

  async ngOnInit() {
    this.name$.next(localStorage.getItem('name') ?? prompt('請輸入你的名字') ?? '沒有名字');
    localStorage.setItem('name', this.name$.value);

    const item = new Item();
    item.setName('幽靈');
    item.setMessage('我進來啦');

    this.bid
      .on('data', (resultItem) => {
        const result = resultItem.toObject();
        console.log('bidirectionalStreamingAsyncList ,result=>', result);
        this.messageItem$.next(result);
      })
      .on('end', () => alert('與聊天室連線已中斷'))
      .on('status', (status) => console.log('status =>', status))
      .write(item);

  }

  ngOnDestroy(): void {
    this.bid.cancel();
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
    this.bid.write(item);
  }

  scrollToBottom = (elm: HTMLElement) => {
    elm.scrollTo({ top: elm.scrollHeight });
  };


}
