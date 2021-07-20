import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from '../material/material.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { ChatbotComponent } from './chatbot/chatbot.component';


@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminSidebarComponent,
    ChatbotComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    AdminHeaderComponent,
    AdminSidebarComponent,
    ChatbotComponent
  ]
})
export class SharedModule { }
