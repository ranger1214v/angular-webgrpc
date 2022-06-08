import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Filter, Item } from 'proto/generated/proto/action_pb';
import { ToDoServiceClient } from 'proto/generated/proto/action_pb_service';
import { Subject } from 'rxjs';
import { scan, tap, } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('listBox', { static: true }) listBox: ElementRef | undefined;

  public clientWeb = new ToDoServiceClient('http://' + window.location.hostname + ':8080');

  public messageItem$ = new Subject<Item.AsObject>();
  public messageList$ = this.messageItem$.pipe(
    scan((current: Item.AsObject[], newItem: Item.AsObject) => [...current, newItem], []),
  );

  constructor() {
  }

  async ngOnInit() {

    const filter = new Filter();
    this.clientWeb.serverStreamingSubList(filter).on('data', (resultItem) => {
      const result = resultItem.toObject();
      this.messageItem$.next(result);
    });

    this.clientWeb.serverStreamingSubList(filter).on('end', () => alert('聊天室已關閉'));

  }

  /**
   * 傳送訊息
   * @param message
   */
  btnSendMessage(message: string) {
    const item = new Item();
    item.setName(message);
    item.setPrice(100);
    this.clientWeb.unaryAddItem(item, (err, response) => console.log('clientWeb.unaryAddItem End', { response, err }));
  }

  scrollToBottom = (elm: HTMLElement) => {
    elm.scrollTo({ top: elm.scrollHeight });
  };

}
