import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-garden',
  templateUrl: './add-garden.component.html',
  styleUrls: ['./add-garden.component.scss']
})
export class AddGardenComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddGardenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
