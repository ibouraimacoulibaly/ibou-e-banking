import { Component, OnInit,  ViewChild  } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-beneficiaire',
  templateUrl: './beneficiaire.component.html',
  styleUrls: ['./beneficiaire.component.css']
})
export class BeneficiaireComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  displayedColumns: string[] = [ 'numero', 'nom', 'compte', 'iban'];

  comptes: Compte[] = [
    {
      iban: 'AZF 2315 7658 2111 6666',
      numero: '12',
      nom: 'ABDOULAYE BALDE',
      compte: '7654 **** ** 09'
     
      
      
    },
    {
      iban: 'HYT 4354 7685 9899 0764',
      numero: '34',
      nom: 'PAPE NDIAYE',
      compte: '8909 **** **31'
     
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
  iban: string;
  numero: string;
  nom: string;
  compte: string;
 
 
}
