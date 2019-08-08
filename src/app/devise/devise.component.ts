import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devise',
  templateUrl: './devise.component.html',
  styleUrls: ['./devise.component.css']
})
export class DeviseComponent implements OnInit {
  displayedColumns: string[] = ['position', 'devise','achat','vente', ];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  devise: string;
  position: number;
  achat: string;
  vente:number;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, devise: 'Euro',achat:'655.957', vente: 650.103},
  {position: 2, devise: 'Dollar us',achat:'561.320', vente: 549.201},
  {position: 3, devise: 'Yen japonais',achat:'5.622', vente: 5.4595},
  {position: 4, devise: 'Couronne danoise',achat:'89.98', vente: 87.8700},
  {position: 5, devise: 'Couronne suédoise',achat:'64.512', vente: 62.5000},
  {position: 6, devise: 'Livre sterling',achat:'739.36', vente: 737.3400},
  {position: 7, devise: 'Couronne norvégienne',achat:'70.001', vente: 68.2900},
 
];
