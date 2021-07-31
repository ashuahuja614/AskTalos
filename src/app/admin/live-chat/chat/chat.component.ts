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

  public onTabChange(tabValue: string){
    if(tabValue == 'chat'){
      this.isWaitingWindowActive = false;
    } else {
      this.isWaitingWindowActive = true;
    }
  }

  public onUserDescriptionChange(tabValue: string){
    if(tabValue == 'quick'){
      this.isUserDescriptionActive = false;
    } else {
      this.isUserDescriptionActive = true;
    }
  }

}
