import { Injectable } from '@angular/core';
import {HousingLocation} from "./housing-location";
import {Observable} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = "http://localhost:8080/mongo-housing"
  constructor(private http: HttpClient) { }

  public getAllHousingLocations(): Observable<HousingLocation[]>  {
       return this.http.get<HousingLocation[]>(`${this.url}/get-all`)
    }
  public getHousingLocationById(id: string): Observable<HousingLocation> {
    return this.http.get<HousingLocation>(`${this.url}/${id}`)
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName)
  }
}

