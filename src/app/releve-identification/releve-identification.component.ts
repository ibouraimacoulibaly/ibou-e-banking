import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-releve-identification',
  templateUrl: './releve-identification.component.html',
  styleUrls: ['./releve-identification.component.css']
})
export class ReleveIdentificationComponent implements OnInit {
  displayedColumns: string[] = ['banque', 'guichet', 'numero', 'rib', 'domicialiation', 'titulaire'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {}) paginator: MatPaginator;


  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
export interface PeriodicElement {
 
  banque: number;
  guichet: number;
  numero: string;
  rib: number;
  domicialiation: string;
  titulaire: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
  {banque: 1244, guichet: 1452, numero: '14256azee', rib: 12, domicialiation: 'H', titulaire: 'H'},
      
  
];