import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveChatRoutingModule } from './live-chat-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    LiveChatRoutingModule,
    SharedModule
  ]
})
export class LiveChatModule { }
