import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateNewBotPopupComponent } from '../create-new-bot-popup/create-new-bot-popup.component';

@Component({
  selector: 'app-all-bots',
  templateUrl: './all-bots.component.html',
  styleUrls: ['./all-bots.component.scss']
})
export class AllBotsComponent implements OnInit {

  constructor(
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  /**
   * @name onCreateNewBot
   * @description open create new bot popup
   */
  public onCreateNewBot(){
    const dialogRef = this._dialog.open(CreateNewBotPopupComponent, {
      width: '500px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
