import { Component, OnInit,  ViewChild  } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms'


@Component({
  selector: 'app-chequiers',
  templateUrl: './chequiers.component.html',
  styleUrls: ['./chequiers.component.css']
})
export class ChequiersComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  displayedColumns: string[] = ['cheque', 'numero', 'etat'];

  comptes: Compte[] = [
    {
      cheque: 'CLASSIQUE',
      numero: '1234 **** 56',
      etat: 'Actif'
      
    },
    {
      cheque: 'PORTEFEUILLE ',
      numero: '4321 **** 93',
      etat: 'Bloqué'
    
    }
   
  ];

  dataSource: MatTableDataSource<Compte>;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Compte>(this.comptes);
    this.paginator._intl.itemsPerPageLabel = 'Nombre de ligne';
    this.dataSource.paginator = this.paginator;
  }

}
export interface Compte {
  cheque: string;
  numero: string;
  etat: string;
 
}