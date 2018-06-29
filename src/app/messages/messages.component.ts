import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {  // 因为即将在模板绑定中用到他 所以一定是公共属性  ⭐⭐⭐⭐⭐ aangular之后绑定到组件得公共属性

  }
  ngOnInit() {
  }

}
