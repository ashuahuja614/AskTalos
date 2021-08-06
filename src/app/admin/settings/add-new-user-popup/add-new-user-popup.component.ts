import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-user-popup',
  templateUrl: './add-new-user-popup.component.html',
  styleUrls: ['./add-new-user-popup.component.scss'],
})
export class AddNewUserPopupComponent implements OnInit {
  constructor(public _dialogRef: MatDialogRef<AddNewUserPopupComponent>) {}

  ngOnInit(): void {}

  /**
   * @name closeDialog
   * @description close popup
   */
  public closeDialog(): void {
    this._dialogRef.close();
  }
}
