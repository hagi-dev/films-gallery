import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';
import { OptionsSelect } from 'src/app/types/common';
import { Films } from 'src/app/types/models/films';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
  selectGenres: string[] = [];
  filmsList!: Films[];
  searchText: string = '';

  constructor(
    private filmsService: FilmsService,
    private route: Router
    ){}
  ngOnInit(): void {
    this.getDataFilms();
  }

  getDataFilms(){
    this.filmsService
      .getAll()
      .subscribe(data =>{
        if(data){
          this.filmsList = data;
        }
      })
  }

  onChangeFilter(event: OptionsSelect[]) {
    this.selectGenres = event.map(data => String(data.value));
  }
  onChangeSearchText(value: string) {
    this.searchText = value;
  }
  onClickCard(id: number){
    console.log("fddddd", id)
    this.route.navigateByUrl(`/films/${id}`);
  }
}
