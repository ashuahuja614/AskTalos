import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BotRoutingModule } from './bot-routing.module';
import { AllBotsComponent } from './all-bots/all-bots.component';
import { CreateNewBotPopupComponent } from './create-new-bot-popup/create-new-bot-popup.component';
import { CreateWorkspacePopupComponent } from './create-workspace-popup/create-workspace-popup.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AllBotsComponent,
    CreateNewBotPopupComponent,
    CreateWorkspacePopupComponent
  ],
  imports: [
    CommonModule,
    BotRoutingModule,
    SharedModule
  ]
})
export class BotModule { }
