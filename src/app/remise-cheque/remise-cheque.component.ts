import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { WriteVarExpr } from '@angular/compiler';



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


  constructor() { }

  ngOnInit() {
  }
  fieldArray: Array<any> = [];
  newAttribute: any = {};

  firstField = true;
  firstFieldName = 'Emetteur';

  // isEditItems: boolean;

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
    let list = document.querySelectorAll("[data-montant]");

    list.forEach((element: HTMLInputElement) => {

      this.reste = this.total - parseFloat(element.value);



    });

    this.formatTotal = this.reste.toLocaleString("fr-FR");
    console.log(this.formatTotal);


  }

  onEditCloseItems() {
    // this.isEditItems = !this.isEditItems;
  }
  calcul() {

    let list = document.querySelectorAll("[data-montant]");
    this.total = 0;
    this.list_Array = [];
    // console.log(list.length,list);
    list.forEach((element: HTMLInputElement) => {
      this.total += parseFloat(element.value);


    });
    this.formatTotal = this.total.toLocaleString("fr-FR");
  }

  //  captureScreen()
  // {
  //   html2canvas(document.getElementById("remise1")).then(function(canvas) {
  //     // document.body.appendChild(canvas);
  //     this.header=false; 
  //     var generatedImage = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  //     window.location.href=generatedImage;
  //   }).finally(()=>{
  //     // this.print();
  //     this.header=true;
  //   }
  //   );
  // }

  print(): void {

    let printContents, popupWin, test;

    printContents = (<HTMLInputElement>document.getElementById('remise1')).innerHTML;
    test = printContents;
    popupWin = window.open('', '', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
        <h1> <title> Remise de chéques </title>  </h3>
          <style>
        
        #impri{
          text-align: left;
          margin-top: 2%;
        }
        #impri1{
          margin-top: -12%;
          text-align: right;
        }
        #p{
          margin-top: -1%;
        }
        tr {
          border: 1px solid;
      }
        #p1{
          margin-top: -1%;
        }
       

        #div{
          margin-top: -14%;
          text-align: right;
         
         
        }
        h4{
         
          margin-left: 50%;
          border-bottom: 2px solid;
        }
        #strong{
          margin-top: -9%;
          margin-left: 10%;
        } 
        #impri2{
          text-align: left;
          
          display: block;

        } 
        .table1{
          margin-left: 70%;
          margin-top : -6%;
        }
        #img{
          width: auto;
         
          height: auto;
        } 
          </style>
        </head>
    <body onload="window.print();window.close()">
    <div id="impri">  <img width="90" height="46" style="margin-top: -0.4%;  margin-left: 3%;" src="../../../assets/img/brm_logo.png"> </br>
    
    </div> <br> <br>
    <div id="impri1">
    
    <p id="p1">Date de la remise : 31/07/2019
    </p>
    </div> <br> <br> 

    <div id="impri2"> Titulaire du compte <br>IBOURAIMA COULIBALY <br>
    COMPTE A VUE PARTICULIERS <br> 
    SICAP FOIRE LOT 139 <br> DAKAR SENEGAL
    <div/>
    <div id="div">
    <h4 style="margin-right: 2%;"> Identifiant national de compte bancaire
   </h4> <br> <br>
   <table class="table1">
   <tr> 
   <th>banque</th> &nbsp;&nbsp; &nbsp;&nbsp; <th>agence</th> <th> Clé</th>
   </tr>
   <tr>
   <td>122222</td> &nbsp;&nbsp; <td style="margin-left: 2%;">22222</td> <td>222222</td>
   </tr>
   </table>
    </div>
    <h5>Compte: 0212354054054545 <h5> 
    <h5>Nombre de chèques :   <h5>  
    <img id="img" src="../../../assets/img/téléchargement">
    </body>
      </html>`
    );
    popupWin.document.close();


  }


  public captureScreen() {

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
        pdf.save('MYPdf.pdf'); // Generated PDF   
      }).finally(() => {
        this.header = true;
      }
      );
     }, 2000);

   


  }



}
