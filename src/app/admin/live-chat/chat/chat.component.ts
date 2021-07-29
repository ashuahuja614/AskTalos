import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public isWaitingWindowActive: boolean = false;
  public isUserDescriptionActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onTabChange(){
    this.isWaitingWindowActive = !this.isWaitingWindowActive;
  }

  public onUserDescriptionChange(){
    this.isUserDescriptionActive = !this.isUserDescriptionActive;
  }

}
