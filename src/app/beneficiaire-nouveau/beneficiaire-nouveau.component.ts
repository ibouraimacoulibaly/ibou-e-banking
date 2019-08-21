import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-beneficiaire-nouveau',
  templateUrl: './beneficiaire-nouveau.component.html',
  styleUrls: ['./beneficiaire-nouveau.component.css']
})
export class BeneficiaireNouveauComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {  }

  ngOnInit() {
  }
  download(){
    const doc = new jsPDF();
    doc.text('FORMULAIRE AJOUT BENEFICIAIRE  ', 60, 100);
    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(2);
    doc.save('Foormulaire_Ajout_Bénéficiaire.pdf');
  }
}
