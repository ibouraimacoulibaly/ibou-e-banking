import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit {

 
  constructor(private sanitizer: DomSanitizer) {  }

  ngOnInit() {
    

  }
  download1(){
    const doc1 = new jsPDF();
    doc1.text('CONTRAT ENTREPRISE ', 100, 100);
    doc1.save('contrat_Entreprises.pdf');
  }
  download(){
    const doc = new jsPDF();
    doc.text('CONTRAT  PARTICULIERS ', 50, 50);
    doc.save('contrat_Particuliers.pdf');
  }
  

}
