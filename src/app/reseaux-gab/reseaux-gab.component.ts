import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';

import { MatTableDataSource, MatPaginator } from '@angular/material';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms'
import { MapServiceService } from '../services/map-service.service';



@Component({
  selector: 'app-reseaux-gab',
  templateUrl: './reseaux-gab.component.html',
  styleUrls: ['./reseaux-gab.component.css']
})
export class ReseauxGabComponent implements OnInit {

  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;


  //title: string = 'Localisation';
  late: number = 14.741433;
  lnge: number = -17.460705;
  locationChoosen = true;
  location: Object;


  @ViewChild('search')
  public searchElementRef: ElementRef;


  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private map: MapServiceService) { }

  ngOnInit() {


    /*this.mapsAPILoader.load().then(() => {
        this.setCurrentLocation();
        this.geoCoder = new google.maps.Geocoder;
   
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ["address"]
        });
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
   
            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
   
            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
          });
        });
      });
    }*/





    // onChooseLocation(event){
    //   this.late=event.coords.lat;
    //   this.lnge=event.coords.lng;
    //   this.locationChoosen=true;
    // }

  }
}
