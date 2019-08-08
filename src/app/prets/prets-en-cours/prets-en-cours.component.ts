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

  displayedColumns: string[] = ['dossier', 'numero', 'du','nombre', 'montant_impaye'];

  comptes: Compte[] = [
    {
      dossier: '012768',
      numero: '021235-4054054545-5405 XOF',
      du:'1 800 000',
      nombre: '8',
      montant_impaye: '389 885'
    },
    {
      dossier: '098908',
      numero: '445052-4054054545-5405 XOF',
      du:'4 300 000',
      nombre: '4',
      montant_impaye: ' 980 000'
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
  dossier: string;
  numero: string;
  du:string;
  nombre: string;
  montant_impaye: string;
}
