import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateWorkspacePopupComponent } from '../create-workspace-popup/create-workspace-popup.component';

@Component({
  selector: 'app-bot-sidebar',
  templateUrl: './bot-sidebar.component.html',
  styleUrls: ['./bot-sidebar.component.scss']
})
export class BotSidebarComponent implements OnInit {

  constructor(
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

   /**
   * @name onAddWorkspace
   * @description open create new bot popup
   */
    public onAddWorkspace(){
      const dialogRef = this._dialog.open(CreateWorkspacePopupComponent, {
        width: '500px',
        autoFocus: false
      });

      dialogRef.afterClosed().subscribe((result) => {
      });
    }

}
