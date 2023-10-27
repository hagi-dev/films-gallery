import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiURL;

  constructor() {}

  get(endpoint: string): Observable<any> {
    return new Observable((observer) => {
      axios.get(`${this.apiUrl}${endpoint}`)
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
  // ... demas metodos PUT DELETE POST
}
