import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {HousingService} from "../housing.service";
import {HousingLocation} from "../housing-location";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  // route: ActivatedRoute = inject(ActivatedRoute);
  // housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = this.fb.group({
      fristName: [""],
      lastName: [""],
      email: [""],
  })
  constructor(private housingService: HousingService,
              private route: ActivatedRoute,
               private fb: FormBuilder) {
    const housingLocationId = this.route.snapshot.params['id'];
    this.housingService.getHousingLocationById(housingLocationId).subscribe(housingLocation => {
      this.housingLocation = housingLocation;
    })
  }
  submitApplication() {
    this.housingService.submitApplication(
       this.applyForm.value.fristName ?? '',
       this.applyForm.value.lastName ?? '',
       this.applyForm.value.email ?? '',
    );
  }
}
