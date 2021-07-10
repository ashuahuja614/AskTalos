import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBotsComponent } from './all-bots/all-bots.component';

const routes: Routes = [
  {
    path: "all",
    component: AllBotsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class BotRoutingModule {}
