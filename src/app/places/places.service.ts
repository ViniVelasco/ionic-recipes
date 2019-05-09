import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  
  private _places: Place[] = [
    new Place(
    'p1',
    'Manhattan Mansion',
    'In the heart of new york city',
    'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg', 
    149.99),
    new Place(
    'p2',
    'Piza',
    'Romantic place in italy',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIspXZ9GR5kDUkUS8n20rUviFuXX5i2U2aVQ73MWyImGo7X9zLrg',
    149.99),
    new Place(
    'p3',
    'the Foggy Palace',
    'Not a city trial',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9UvH4ahXDjzgBbJnDxJp0hTVKrOY8s3W0ueCLiHD26pNJGPILKw',
    149.99)
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
