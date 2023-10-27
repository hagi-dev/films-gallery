import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private apiService: ApiService) { }

  getAll(){
    return this.apiService.get('/films')
  }
  getById(id: number){
    return this.apiService.get(`/films/${id}`)
  }
}
