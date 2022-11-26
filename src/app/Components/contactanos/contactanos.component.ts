import { Component } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {

  center = {lat: 10.46314, lng:  73.25322};  
  zoom = 15;
  display?: google.maps.LatLngLiteral;

}
