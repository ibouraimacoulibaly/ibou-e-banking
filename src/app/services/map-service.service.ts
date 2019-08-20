import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

interface Location{
  latitude: number;
  longitude: number;
  }
@Injectable({
  providedIn: 'root'
})
export class MapServiceService {

  constructor() { }
  // getLocation(){
  //   return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=AIzaSyAh6sPBwLCAj-pprUs_W7E3KrX-ARZLKlo')
  // }
}
