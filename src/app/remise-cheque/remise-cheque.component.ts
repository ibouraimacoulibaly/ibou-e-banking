import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';




@Component({
  selector: 'app-remise-cheque',
  templateUrl: './remise-cheque.component.html',
  styleUrls: ['./remise-cheque.component.css']
})
export class RemiseChequeComponent implements OnInit {

  total = 0;
  reste = 0;
  formatTotal;
  list_Array = [];
  firstFieldName1: string;
  header = true;
  nombre = 0;
  valeur;

  constructor() { }

  ngOnInit() {
  }
  fieldArray: Array<any> = [];
  newAttribute: any = {};

  firstField = true;
  firstFieldName = 'Emetteur';

  isEditItems: boolean;

  number: string;

  

  addFieldValue(index) {

    if (this.fieldArray.length <= 10) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    } else {

    }

  }

  deleteFieldValue(index) {
   this.fieldArray.splice(index, 1);
   const el = document.getElementById('tr'+index);
   el.parentNode.removeChild(el);
    
  this.calcul();
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
  }
  calcul() {
    
    let list = document.querySelectorAll("[data-montant]");
    this.total = 0;
    this.list_Array = [];
    
    
    list.forEach((element: HTMLInputElement) => {
     

     this.valeur = parseFloat(element.value);
     element.value= this.valeur;
      console.log(this.valeur, this.valeur);

      this.total += parseFloat(element.value);
    

    });
    this.formatTotal = this.total.toLocaleString("fr-FR");
  }

  //  captureScreen()
  // {
  //   html2canvas(document.getElementById("remise1")).then(function(canvas) {
  //      document.body.appendChild(canvas);
  //     this.header=false; 
  //     var generatedImage = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  //     window.location.href=generatedImage;
  //   }).finally(()=>{
  //      this.print();
  //     this.header=true;
  //   }
  //   );
  // }
  

  


  public captureScreen() {
    let list = document.querySelectorAll("[data-montant]");
    
    var data = document.getElementById('remise1');
    this.header = false;
    setTimeout(() => {
      html2canvas(data).then(canvas => {
        // Few necessary setting options  
  
        var imgWidth = 208;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
  
        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
        var position = 10;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdf.save('Remise de chéques.pdf'); // Generated PDF   
      }).finally(() => {
        this.header = true;
      }
      );
     }, 500);

   
     this.nombre = list.length;
     //console.log(this.nombre);

  }

ligne() {
     let nomb;
     nomb= (<HTMLInputElement>document.getElementById('remise'));
}

}
