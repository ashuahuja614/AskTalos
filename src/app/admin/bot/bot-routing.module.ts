import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBotsComponent } from './all-bots/all-bots.component';

const routes: Routes = [
  {
    path: "all-bots",
    component: AllBotsComponent
  },
  {
    path: "",
    redirectTo: "all-bots",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class BotRoutingModule {}
