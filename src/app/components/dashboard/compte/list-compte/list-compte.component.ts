import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms'


@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.css']
})
export class ListCompteComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  displayedColumns: string[] = ['intitule', 'numero', 'solde', 'montant_dispo', 'montant'];

  comptes: Compte[] = [
    {
      intitule: 'COMPTE A VUE PARTICULIERS',
      numero: '021235-4054054545-5405 XOF',
      solde: '300 885',
      montant_dispo: '300 885'
    },
    {
      intitule: 'COMPTE EPARGNE',
      numero: '445052-4054054545-5405 XOF',
      solde: '20 054 885',
      montant_dispo: '20 054 885'
    },
    {
      intitule: 'COMPTE COURANT',
      numero: '445052-4054054545-5400 XOF',
      solde: '20 054 885',
      montant_dispo: '20 054 885'
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
  solde: string;
  montant_dispo: string;
}
