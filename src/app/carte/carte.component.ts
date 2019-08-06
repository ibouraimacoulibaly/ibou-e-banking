import { Component, OnInit,  ViewChild  } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  displayedColumns: string[] = ['carte', 'numero', 'debit', 'compte', 'montant'];

  comptes: Compte[] = [
    {
      carte: 'COMPTE A VUE PARTICULIERS',
      numero: '021235-4054054545-5405 XOF',
      debit: '300 885',
      compte: '300 885'
    },
    {
      carte: 'COMPTE EPARGNE',
      numero: '445052-4054054545-5405 XOF',
      debit: '20 054 885',
    compte: '20 054 885'
    },
    {
      carte: 'COMPTE COURANT',
      numero: '445052-4054054545-5400 XOF',
      debit: '20 054 885',
      compte: '20 054 885'
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
  carte: string;
  numero: string;
  debit: string;
  compte: string;
}
