import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-list-operations',
  templateUrl: './list-operations.component.html',
  styleUrls: ['./list-operations.component.css']
})
export class ListOperationsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'operation', 'valeur', 'debit', 'credit', 'solde'];
  options = ['Excel', 'PDF'];
  comptes: Operation[] = [
    {
      date: '28/02/2019',
      operation: 'AGIOS DU 31/01/19 AU 28/02/19',
      valeur: '28/02/2019',
      debit: '100 000',
      credit: '',
      solde: '+665 000'
    },
    {
      date: '26/02/2019',
      operation: 'VIREMENT APPROV',
      valeur: '25/02/2019',
      debit: '50 000',
      credit: '',
      solde: '+765 000'
    },
    {
      date: '25/02/2019',
      operation: 'ECHEANCE 441/850 PRET 200200',
      valeur: '25/02/2019',
      debit: '100 000',
      credit: '',
      solde: '+815 000'
    },
    {
      date: '21/02/2019',
      operation: 'FRAIS REMPLACEMENT 22857',
      valeur: '21/02/2019',
      debit: '15 000',
      credit: '',
      solde: '+915 000'
    },
    {
      date: '12/02/2019',
      operation: 'FRAIS TELECOMP REVERSE A BCEAO',
      valeur: '12/02/2019',
      debit: '20 000',
      credit: '',
      solde: '+930 000'
    },
    {
      date: '11/02/2019',
      operation: 'REM.CHQ.CONFRERE S/PLACE',
      valeur: '12/02/2019',
      debit: '',
      credit: '250 000',
      solde: '+950 000'
    },
    {
      date: '29/01/2019',
      operation: 'RGL/IMP 774/011 PRET 364711',
      valeur: '29/01/2019',
      debit: '100 000',
      credit: '',
      solde: '+700 000'
    },
  ];

  dataSource: MatTableDataSource<Operation>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Operation>(this.comptes);
    this.paginator._intl.itemsPerPageLabel = 'Nombre de ligne';
    this.dataSource.paginator = this.paginator;
  }


}

export interface Operation {
  date: string;
  operation: string;
  valeur: string;
  debit: string;
  credit: string;
  solde: string;
}
