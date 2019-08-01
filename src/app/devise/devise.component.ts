import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devise',
  templateUrl: './devise.component.html',
  styleUrls: ['./devise.component.css']
})
export class DeviseComponent implements OnInit {
  displayedColumns: string[] = ['position', 'devise', 'fcfa'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  devise: string;
  position: number;
  fcfa: number;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, devise: 'Euro', fcfa: 655.9570},
  {position: 2, devise: 'Dollar us', fcfa: 590.1500},
  {position: 3, devise: 'Yen japonais', fcfa: 5.4595},
  {position: 4, devise: 'Couronne danoise', fcfa: 87.8700},
  {position: 5, devise: 'Couronne suédoise', fcfa: 62.5000},
  {position: 6, devise: 'Livre sterling', fcfa: 737.3400},
  {position: 7, devise: 'Couronne norvégienne', fcfa: 68.2900},
  {position: 8, devise: 'Couronne thèque', fcfa: 25.7000},
  {position: 9, devise: 'Forint hongrois', fcfa: 2.0200},
  {position: 10, devise: 'Zloty polonais', fcfa: 154.4400},
  {position: 11, devise: 'Franc suisse', fcfa: 596.9200},
  {position: 12, devise: 'Dollar canadien', fcfa: 449.5600},
  {position: 13, devise: 'Dollar australien', fcfa: 411.4400},
  {position: 14, devise: 'Dollar néo-zélandais', fcfa:   395.2500},
  {position: 15, devise: 'Rand sud-africain', fcfa: 42.4080},
  {position: 16, devise: 'Yuan chinois', fcfa: 85.8700},
];
