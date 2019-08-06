import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms';




@Component({
  selector: 'app-prets-en-cours',
  templateUrl: './prets-en-cours.component.html',
  styleUrls: ['./prets-en-cours.component.css']
})
export class PretsEnCoursComponent implements OnInit {
positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  displayedColumns: string[] = ['intitule', 'numero', 'nom','solde', 'montant_dispo', 'montant'];

  comptes: Compte[] = [
    {
      intitule: 'Compte à Vue Particuliers',
      numero: '021235-4054054545-5405 XOF',
      nom:'Habib ball',
      solde: '300 885',
      montant_dispo: '389 885'
    },
    {
      intitule: 'Compte Epargne',
      numero: '445052-4054054545-5405 XOF',
      nom:'Saliou sall',
      solde: '20 054 885',
      montant_dispo: '24 650 000'
    },
    {
      intitule: 'Compte Courant',
      numero: '445052-4054054545-5400 XOF',
      nom:'Fatma Thiaw',

      solde: '12 054 885',
      montant_dispo: '17 156 000'
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
  intitule: string;
  numero: string;
  nom:string;
  solde: string;
  montant_dispo: string;
}
