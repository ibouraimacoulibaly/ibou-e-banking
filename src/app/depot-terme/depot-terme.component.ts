import { Component, OnInit,  ViewChild  } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms'


@Component({
  selector: 'app-depot-terme',
  templateUrl: './depot-terme.component.html',
  styleUrls: ['./depot-terme.component.css']
})
export class DepotTermeComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  displayedColumns: string[] = [ 'numero',  'compte', 'description', 'taux','date', 'echeance', 'montant'];

  comptes: Compte[] = [
    {
      numero: '12',
      compte: '5564 8977 3215 6775',
      description: 'Normal',
      taux: '27%',
      date: '26/07/2019',
      echeance: '30/08/2019',
      montant: '122 546',
     
      
      
    },
    {
      numero: '13',
      compte: '5643 9807 4321 8796',
      description: 'Par defaut',
      taux: '19%',
      date: '01/07/2018',
      echeance: '03/03/2019',
      montant: '342 000',
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
  description: string;
  numero: string;
  date: string;
  compte: string;
  taux: string;
  montant: string;
  echeance: string;
  
 
}