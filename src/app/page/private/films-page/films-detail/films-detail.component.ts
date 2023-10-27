import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { FilmsService } from 'src/app/services/films.service';
import { Films } from 'src/app/types/models/films';

@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.component.html',
  styleUrls: ['./films-detail.component.scss']
})
export class FilmsDetailComponent implements OnInit {
  film!: Films;
  image: string ='';
  constructor(
    private filmsService: FilmsService,
    private router: ActivatedRoute,
    private route: Router
  ){
    this.getFilmData();
   }
  ngOnInit(): void {

  }
  getFilmData(){
    this.router.paramMap
      .pipe(switchMap((param)=>{
        const filmId = param.get('id');
        if(Number(filmId)){
          return this.filmsService.getById(Number(filmId));
        }else{
          throw new Error('Invalid filmId');
        }
      }))
      .subscribe(data=>{
        if(data){
          this.film = data;
          this.image = data.image;
        }
      })
  }
  onBack(){
    this.route.navigateByUrl('/films')
  }
}
