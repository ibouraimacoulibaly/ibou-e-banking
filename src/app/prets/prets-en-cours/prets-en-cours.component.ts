import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
  
}
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive'
];
const NAMES: string[] = [
  'ibouraima coulibaly', 'youga dieng', 'pape', 'Atticus', 'Amelia', 'Jack', 'Charlotte'
];
const numero: string[] =[
  'gfgfgfggfgfgf65899', 'hhjjjjj554466', 'ddd5d55d5d55d55d55d', 'fggfgfggfgfgfggf885', 'gfggfggfgfgg333'
];
const dates: string[] =[
  'gfgfgfggfgfgf65899', 'hhjjjjj554466', 'ddd5d55d5d55d55d55d', 'fggfgfggfgfgfggf885', 'gfggfggfgfgg333'
];
const dat: string[] =[
  'gfgfgfggfgfgf65899', 'hhjjjjj554466', 'ddd5d55d5d55d55d55d', 'fggfgfggfgfgfggf885', 'gfggfggfgfgg333'
];
const numero1: string[] =[
  'gfgfgfggfgfgf65899', 'hhjjjjj554466', 'ddd5d55d5d55d55d55d', 'fggfgfggfgfgfggf885', 'gfggfggfgfgg333'
]



@Component({
  selector: 'app-prets-en-cours',
  templateUrl: './prets-en-cours.component.html',
  styleUrls: ['./prets-en-cours.component.css']
})
export class PretsEnCoursComponent implements OnInit { displayedColumns: string[] = ['id', 'name', 'progress', 'color', 'numero'];
dataSource: MatTableDataSource<UserData>;

@ViewChild(MatPaginator, {}) paginator: MatPaginator;
@ViewChild(MatSort, {}) sort: MatSort;

constructor() {
  // Create 100 users
  const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

  // Assign the data to the data source for the table to render
  this.dataSource = new MatTableDataSource(users);
}


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))
    ]
  }

}
