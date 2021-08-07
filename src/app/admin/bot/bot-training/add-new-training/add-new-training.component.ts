import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-training',
  templateUrl: './add-new-training.component.html',
  styleUrls: ['./add-new-training.component.scss']
})
export class AddNewTrainingComponent implements OnInit {
  panelOpenState = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
