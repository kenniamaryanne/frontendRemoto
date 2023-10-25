import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() {}

  getLocation(): Promise<GeolocationCoordinates | null> {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position.coords),
          (error) => reject(error),
          {
            enableHighAccuracy: true, 
          }
        );
        
      } else {
        resolve(null); 
      }
    });
  }
  
}




