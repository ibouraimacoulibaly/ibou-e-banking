import { Component, OnInit,  ViewChild  } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-vers-compte',
  templateUrl: './vers-compte.component.html',
  styleUrls: ['./vers-compte.component.css'],
  
})
export class VersCompteComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  displayedColumns: string[] = [ 'numero', 'date', 'compte', 'credit', 'motif', 'montant', 'dates'];

  comptes: Compte[] = [
    {
      numero: '09',
      date: '26/07/2019',
      compte: '00981234768576543',
      credit: '34768576543210056',
      motif: 'Transfert',
      montant: '540 64O',
      dates: '21/09/2019'
      
      
    },
    {
      numero: '43',
      date: '23/04/2019',
      compte: '43211234869994493',
      credit: '48643219994493123',
      motif: 'Demande',
      montant: '122 464',
      dates: '26/06/2019'
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
  numero: string;
  date: string;
  compte: string;
  motif: string;
  montant: string;
  dates: string;
  credit: string;
  
 
}

