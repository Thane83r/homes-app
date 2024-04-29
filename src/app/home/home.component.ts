import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import {HousingLocation} from "../housing-location";
import {HousingService} from "../housing.service";
import {RouterLink} from "@angular/router";
import {CurvedDivComponent} from "../shared/curved-div/curved-div.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, RouterLink, CurvedDivComponent],
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];

// housingService: HousingService = inject(HousingService);
filteredLocationList: HousingLocation[] = [];
  constructor(private housingService: HousingService) {
    this.housingService.getAllHousingLocations().subscribe((housingLocationList: HousingLocation[]) => {
      this.filteredLocationList = housingLocationList;
    });
  }
  public filterResults(text: string) {
    if(!text) {
      this.filteredLocationList = this.housingLocationList
    }
    this.filteredLocationList = this.housingLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    )
  }
}