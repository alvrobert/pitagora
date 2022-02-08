import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const endpoint = 'http://localhost:8080/clients';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Accept: 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPersonsById(id, path) {
    return this.http.get(`${endpoint}/${path}/${id}`, httpOptions);
  }

}
