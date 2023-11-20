import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private jsonp: HttpClient) { }

  getFeriados(callback: string): Observable<any> {
    const apiUrl = `https://apis.digital.gob.cl/fl/feriados/2023?callback=${callback}`;
    return this.jsonp.jsonp(apiUrl, 'callback');
  }
}