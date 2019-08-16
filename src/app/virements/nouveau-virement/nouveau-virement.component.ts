import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau-virement',
  templateUrl: './nouveau-virement.component.html',
  styleUrls: ['./nouveau-virement.component.css']
})
export class NouveauVirementComponent implements OnInit {
  virement = 'permanent';
  date = 'any';
  constructor() { }

  ngOnInit() {
  }

}
