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

  displayedColumns: string[] = ['carte', 'numero', 'debit', 'etat'];

  comptes: Compte[] = [
    {
      carte: 'VISA ELECTRON',
      numero: '1234 **** **** **56',
      debit: 'Immédiat',
      etat: 'Actif'
      
    },
    {
      carte: ' OASIS GIM-UEMOA  ',
      numero: '4321 **** **** **93',
      debit: 'Différé',
      etat: 'Bloqué'
    
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
  etat: string;
 
}
