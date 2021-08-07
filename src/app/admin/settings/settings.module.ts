import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsComponent } from './settings/settings.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { UsersComponent } from './users/users.component';
import { SettingsSidebarComponent } from './settings-sidebar/settings-sidebar.component';
import { CreateNewTeamPopupComponent } from './create-new-team-popup/create-new-team-popup.component';
import { AddNewUserPopupComponent } from './add-new-user-popup/add-new-user-popup.component';
import { SelectUsersPopupComponent } from './select-users-popup/select-users-popup.component';


@NgModule({
  declarations: [
    SettingsComponent,
    MeetingsComponent,
    UsersComponent,
    SettingsSidebarComponent,
    CreateNewTeamPopupComponent,
    AddNewUserPopupComponent,
    SelectUsersPopupComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
