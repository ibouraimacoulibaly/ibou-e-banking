import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-releve-impression',
  templateUrl: './releve-impression.component.html',
  styleUrls: ['./releve-impression.component.css']
})
export class ReleveImpressionComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  
];
