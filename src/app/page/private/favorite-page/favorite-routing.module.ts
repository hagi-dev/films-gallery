import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from 'src/app/components/components.module';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';

const routes: Routes = [
  { path: '', component: FavoriteListComponent},
];

@NgModule({
  declarations: [FavoriteListComponent],
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class FavoriteRoutingModule {}
