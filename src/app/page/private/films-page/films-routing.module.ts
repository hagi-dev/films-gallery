import { NgModule } from '@angular/core';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsDetailComponent } from './films-detail/films-detail.component';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from 'src/app/components/components.module';
import { LayoutsModule } from 'src/app/components/layouts/layouts.module';
import { CommonModule } from '@angular/common';
import { FilterByNamePipe } from 'src/app/pipe/filterByName.pipe';
import { FilterByGenderPipe } from 'src/app/pipe/filterByGender.pipe';

const routes: Routes = [
  { path: '', component: FilmsListComponent},
  { path: ':id', component: FilmsDetailComponent},
];

@NgModule({
  declarations: [FilmsDetailComponent, FilmsListComponent, FilterByNamePipe, FilterByGenderPipe],
  imports: [RouterModule.forChild(routes), ComponentsModule, LayoutsModule, CommonModule],
  exports: [RouterModule],
})
export class FilmsRoutingModule {}
