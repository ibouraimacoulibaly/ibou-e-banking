import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-remise-cheque',
  templateUrl: './remise-cheque.component.html',
  styleUrls: ['./remise-cheque.component.css']
})
export class RemiseChequeComponent implements OnInit {
  number1 = new FormControl('');
  number2 = new FormControl('');
  firstFieldName4:any;
  montant:any;
 
  constructor() { }

  ngOnInit() {
  }
  fieldArray: Array<any> = [];
  newAttribute: any = {};

  firstField = true;
  firstFieldName = 'Emetteur';
  // isEditItems: boolean;

  addFieldValue(index) {
    if (this.fieldArray.length <= 10) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    } else {
      
    }
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  onEditCloseItems() {
   // this.isEditItems = !this.isEditItems;
  }
  
}
