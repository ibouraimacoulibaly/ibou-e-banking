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

  displayedColumns: string[] = ['numero','date' , 'nom', 'categorie'];

  comptes: Compte[] = [
    {
      nom: 'COULIBALY IBOURAIMA',
      numero: '1234 **** **56',
      date: '26/07/2019',
      categorie: 'En cours'
      
      
    },
    {
      nom: 'YOUGA DIENG ',
      numero: '4321 **** **93',
      date: '26/07/2019',
      categorie: 'En cours'
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
  nom: string;
  numero: string;
  date: string;
  categorie: string;
  
 
}
