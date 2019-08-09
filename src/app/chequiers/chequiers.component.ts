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

  displayedColumns: string[] = ['cheque', 'date' , 'numero', 'etat'];

  comptes: Compte[] = [
    {
      cheque: 'ATalon Barré 25F',
      numero: '11675-4054054545-0000',
      date: '07/08/2019',
      etat: 'Validé'
      
    },
    {
      cheque: 'Simple Non Barré 100F ',
      numero: '445052-4054054545-5405',
      date: '31/07/2019',
      etat: 'En courss'
    
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
  date: string;
 
}