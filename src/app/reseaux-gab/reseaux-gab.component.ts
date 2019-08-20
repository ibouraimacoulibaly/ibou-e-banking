import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';

import { MatTableDataSource, MatPaginator } from '@angular/material';
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms'
import { MapServiceService } from '../services/map-service.service';



@Component({
  selector: 'app-reseaux-gab',
  templateUrl: './reseaux-gab.component.html',
  styleUrls: ['./reseaux-gab.component.css']
})
export class ReseauxGabComponent implements OnInit {
  title: string = 'Localisation';
  late: number = 14.729898480616876;
  lnge: number = -17.457637927829182;
  locationChoosen=true;
  location: Object;
  constructor(private map: MapServiceService) { }

  ngOnInit() {
    // this.map.getLocation().subscribe(data =>{
    //   console.log(data);
    //   this.late = data.latitude;
    //   this.lnge = data.longitude;
    // })
  }
  // onChooseLocation(event){
  //   this.late=event.coords.lat;
  //   this.lnge=event.coords.lng;
  //   this.locationChoosen=true;
  // }

}
