import { ICars } from './cars';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class OpencarService{

  private _url: string = "http://localhost:8081/findAllCars";
  constructor(private http: HttpClient) {}

  getCars(): Observable<ICars[]>{
    return this.http.get<ICars[]>(this._url);
  }
}
