import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Feature } from '../../interface/places';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {


constructor(private placesService:PlacesService , private mapservice:MapService){}

get isLoadingPlaces():boolean{
  return this.placesService.isLoadingPlaces;
}

get places():Feature[]{
  return this.placesService.places;

}

flyto(place : Feature){
const [lng,lat]=place.center;
this.mapservice.flyTo([lng,lat])
}


}
