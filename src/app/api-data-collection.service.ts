import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDataCollectionService {

  private dataFetchingUrl= 'https://jsonplaceholder.typicode.com/users' 

  constructor(private http: HttpClient) { }

  getApiData(){
    var GetUserData = this.http.get(this.dataFetchingUrl)
    return GetUserData;
  }
}
