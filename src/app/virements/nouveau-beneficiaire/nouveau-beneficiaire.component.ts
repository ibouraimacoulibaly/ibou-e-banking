import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nouveau-beneficiaire',
  templateUrl: './nouveau-beneficiaire.component.html',
  styleUrls: ['./nouveau-beneficiaire.component.css']
})
export class NouveauBeneficiaireComponent implements OnInit {
  virement = 'permanent';
  date = 'any';
  constructor() { }


  ngOnInit() {
  }
  optionDate() {
    console.log('entrée');
  }
  option(){}

}
