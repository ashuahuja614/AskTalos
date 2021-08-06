import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-new-team-popup',
  templateUrl: './create-new-team-popup.component.html',
  styleUrls: ['./create-new-team-popup.component.scss'],
})
export class CreateNewTeamPopupComponent implements OnInit {
  constructor(public _dialogRef: MatDialogRef<CreateNewTeamPopupComponent>) {}

  ngOnInit(): void {}

  /**
   * @name closeDialog
   * @description close popup
   */
  public closeDialog(): void {
    this._dialogRef.close();
  }
}
