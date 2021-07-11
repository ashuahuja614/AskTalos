import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-workspace-popup',
  templateUrl: './create-workspace-popup.component.html',
  styleUrls: ['./create-workspace-popup.component.scss']
})
export class CreateWorkspacePopupComponent implements OnInit {

  constructor(
    public _dialogRef: MatDialogRef<CreateWorkspacePopupComponent>
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
