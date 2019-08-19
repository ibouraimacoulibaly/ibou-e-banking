import { Component, OnInit,  ViewChild  } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-vers-beneficaire',
  templateUrl: './vers-beneficaire.component.html',
  styleUrls: ['./vers-beneficaire.component.css']
})
export class VersBeneficaireComponent implements OnInit {
 
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  displayedColumns: string[] = [ 'numero', 'date', 'compte', 'beneficiaire', 'motif', 'montant', 'dates'];

  comptes: Compte[] = [
    {
      beneficiaire: 'COULIBALY IBOURAIMA 2315 7658 2111 6666',
      numero: '12',
      date: '26/07/2019',
      compte: '5436-0984869994786',
      motif: 'Transfert',
      montant: '122 546',
      dates: '26/08/2019'
      
      
    },
    {
      beneficiaire: 'YOUGA DIENG 4354 7685 9899 0764',
      numero: '34',
      date: '20/03/2019',
      compte: '4321-1234869994493',
      motif: 'Demande',
      montant: '500 464',
      dates: '06/12/2019'
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
  beneficiaire: string;
  numero: string;
  date: string;
  compte: string;
  motif: string;
  montant: string;
  dates: string;
  
 
}
