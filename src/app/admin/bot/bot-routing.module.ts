import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBotsComponent } from './all-bots/all-bots.component';
import { AddNewTrainingComponent } from './bot-training/add-new-training/add-new-training.component';
import { BotTrainingComponent } from './bot-training/bot-training.component';
import { BotComponent } from './bot/bot.component';

const routes: Routes = [
  {
    path: '',
    component: BotComponent,
    children: [
      {
        path: '',
        component: AllBotsComponent,
      },
      {
        path: 'all-bots',
        component: AllBotsComponent,
      },
      {
        path: 'training',
        component: BotTrainingComponent,
      },
      {
        path: 'add-new-training',
        component: AddNewTrainingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotRoutingModule {}
