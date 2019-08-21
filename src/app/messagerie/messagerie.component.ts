import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms'


@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  displayedColumns: string[] = ['dossier', 'numero', 'du','nombre'];

  comptes: Compte[] = [
    {
      dossier: 'BRM BANK',
      numero: 'Demande de carte',
      du:'12/10/2017',
      nombre: '27/11/2017',
    },
    {
      dossier: 'BRM BANK',
      numero: 'Demande de chéquier',
      du:'25/06/2015',
      nombre: '25/08/2015',
     
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
}
