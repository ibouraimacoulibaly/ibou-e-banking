import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Input } from '@angular/compiler/src/core';

@Component({
  selector: 'app-remise-cheque',
  templateUrl: './remise-cheque.component.html',
  styleUrls: ['./remise-cheque.component.css']
})
export class RemiseChequeComponent implements OnInit {
  number = new FormControl();
  number1 = new FormControl();
 //resultat = new FormControl();
//  number: number = 10;  
//   number1: number = 20; 
  total;
  list_Array =[];
  sum;
 

 
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
    calcul() {
       
    let list = document.querySelectorAll("[data-montant]");
    this.total = 0;
    this.list_Array= [];
     list.forEach((element:HTMLInputElement) => {
      this.total = element.value;
      this.list_Array.push(element.value);
      
    });
     
   }

   afterAdd(){
    let list: NodeListOf<HTMLInputElement> = document.querySelectorAll("[data-montant]");
    for( let i=0 ; i < this.list_Array.length; i++ ){
      list[i].value= this.list_Array[i];
     }
   }
   somme(){
    this.sum = this.total + this.list_Array;
   }
}
