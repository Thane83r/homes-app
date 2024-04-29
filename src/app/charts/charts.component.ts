import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {NgxEchartsDirective} from "ngx-echarts";
import {EChartsOption} from "echarts";
import {HousingLocation} from "../housing-location";
import {HousingService} from "../housing.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatSlideToggleChange, MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ChartsService} from "../charts.service";


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  standalone: true,
  imports: [
      CommonModule,
    NgxEchartsDirective,
    FormsModule,
    ReactiveFormsModule,
      MatSlideToggleModule
  ],
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit{
  filteredLocationList: HousingLocation[] = [];
  option: EChartsOption = {};

  // option: EChartsOption = {
  //   xAxis: {
  //     type: 'category',
  //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //   },
  //   yAxis: {
  //     type: 'value'
  //   },
  //   series: [
  //
  //   ]
  // };

  constructor(private housingService: HousingService,
              private chartsService: ChartsService) {
  }

  ngOnInit(): void {
    this.housingService.getAllHousingLocations().subscribe((housingLocationList: HousingLocation[]) => {
      this.filteredLocationList = housingLocationList;
      const availableUnitsByStateMap = new Map<string, number>();
      housingLocationList.forEach((housingObject) => {
        const state = housingObject.state;
        const availableUnits = housingObject.availableUnits;
        if(availableUnitsByStateMap.has(state)) {
          availableUnitsByStateMap.set(state, availableUnitsByStateMap.get(state)! + availableUnits);
        } else {
          availableUnitsByStateMap.set(state, availableUnits);
        }
      });
      const states = Array.from(availableUnitsByStateMap.keys());
      const availableUnitSums = Array.from(availableUnitsByStateMap.values());
      this.option = this.chartsService.generateBarChart(states, availableUnitSums)
    });
  }

  public darkMode($event: MatSlideToggleChange) {
    if ($event.checked) {
      this.option = {
        ...this.option,
        backgroundColor: "#000000",
      };
    } else {
      this.option = {
        ...this.option,
        backgroundColor: "#FFFFFF",
      };
    }

  }
}
