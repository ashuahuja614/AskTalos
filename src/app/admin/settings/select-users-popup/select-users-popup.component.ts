import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-select-users-popup',
  templateUrl: './select-users-popup.component.html',
  styleUrls: ['./select-users-popup.component.scss'],
})
export class SelectUsersPopupComponent implements OnInit {
  constructor(public _dialogRef: MatDialogRef<SelectUsersPopupComponent>) {}

  ngOnInit(): void {}

  /**
   * @name closeDialog
   * @description close popup
   */
  public closeDialog(): void {
    this._dialogRef.close();
  }
}
