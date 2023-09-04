import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient} from "@angular/common/http"
import { User } from 'src/app/core/interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  private Api='https://zil-test.s3.us-east-1.amazonaws.com/json-data.json'

  getUserData=():Observable<User[]> =>{
    return this._http.get<User[]>(`${this.Api}`)
  }
}
