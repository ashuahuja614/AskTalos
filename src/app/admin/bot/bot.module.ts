import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { QuillModule } from 'ngx-quill'

import { BotRoutingModule } from './bot-routing.module';
import { AllBotsComponent } from './all-bots/all-bots.component';
import { CreateNewBotPopupComponent } from './create-new-bot-popup/create-new-bot-popup.component';
import { CreateWorkspacePopupComponent } from './create-workspace-popup/create-workspace-popup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BotSidebarComponent } from './bot-sidebar/bot-sidebar.component';
import { BotTrainingComponent } from './bot-training/bot-training.component';
import { AddNewTrainingComponent } from './bot-training/add-new-training/add-new-training.component';
import { BotComponent } from './bot/bot.component';
import { BotFlowChartComponent } from './bot-flow-chart/bot-flow-chart.component';
import { CreateChildIntentPopupComponent } from './create-child-intent-popup/create-child-intent-popup.component';

@NgModule({
  declarations: [
    AllBotsComponent,
    CreateNewBotPopupComponent,
    CreateWorkspacePopupComponent,
    BotSidebarComponent,
    BotTrainingComponent,
    AddNewTrainingComponent,
    BotComponent,
    BotFlowChartComponent,
    CreateChildIntentPopupComponent
  ],
  imports: [
    CommonModule,
    BotRoutingModule,
    SharedModule,
    // QuillModule.forRoot()
  ]
})
export class BotModule { }
