import { Component } from '@angular/core';

@Component({
  selector: 'app-mundial',
  templateUrl: './mundial.component.html',
  styleUrls: ['./mundial.component.css']
})
export class MundialComponent {

  ngOnInit() {
    // Este código carga el reproductor de la API en un iframe de manera asíncrona, siguiendo las instrucciones:
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');
  
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

}
