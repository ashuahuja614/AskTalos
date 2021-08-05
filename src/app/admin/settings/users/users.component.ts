import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewUserPopupComponent } from './../add-new-user-popup/add-new-user-popup.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private _dialog: MatDialog) {}

  ngOnInit(): void {}

  /**
   * @name onAddNewUSer
   * @description open add new user popup
   */
  public onAddNewUSer() {
    const dialogRef = this._dialog.open(AddNewUserPopupComponent, {
      width: '700px',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
