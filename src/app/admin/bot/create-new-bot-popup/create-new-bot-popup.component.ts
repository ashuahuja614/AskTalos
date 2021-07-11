import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-new-bot-popup',
  templateUrl: './create-new-bot-popup.component.html',
  styleUrls: ['./create-new-bot-popup.component.scss']
})
export class CreateNewBotPopupComponent implements OnInit {

  constructor(
    public _dialogRef: MatDialogRef<CreateNewBotPopupComponent>
  ) { }

  ngOnInit(): void {
  }

  /**
   * @name closeDialog
   * @description close popup
   */
  public closeDialog(): void {
    this._dialogRef.close();
  }
}
