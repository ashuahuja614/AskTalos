import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateNewTeamPopupComponent } from '../create-new-team-popup/create-new-team-popup.component';
import { SelectUsersPopupComponent } from './../select-users-popup/select-users-popup.component';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss'],
})
export class MeetingsComponent implements OnInit {
  constructor(private _dialog: MatDialog) {}

  ngOnInit(): void {}

  /**
   * @name onCreateNewTeam
   * @description open create new team popup
   */
  public onCreateNewTeam() {
    const dialogRef = this._dialog.open(CreateNewTeamPopupComponent, {
      width: '500px',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

    /**
   * @name onSelectUSers
   * @description open select users popup
   */
     public onSelectUSers() {
      const dialogRef = this._dialog.open(SelectUsersPopupComponent, {
        width: '1000px',
        autoFocus: false,
      });
  
      dialogRef.afterClosed().subscribe((result) => {});
    }
}
