import { NgModule } from '@angular/core';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardFilmsComponent } from './card-films/card-films.component';

@NgModule({
  declarations: [
    FilterSectionComponent,
    SearchBoxComponent,
    CardFilmsComponent
  ],
  imports:[FormsModule, CommonModule],
  exports: [
    FilterSectionComponent,
    SearchBoxComponent,
    CardFilmsComponent
  ],
  providers: [],
})
export class ComponentsModule { }
