import { NgModule } from "@angular/core";
import { FilmsRoutingModule } from "./films-page/films-routing.module";
import { ComponentsModule } from "src/app/components/components.module";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'films',
    loadChildren: () =>
      import('./films-page/films-routing.module').then(
        (m)=> m.FilmsRoutingModule
      )
  },
  {
    path: 'favorite',
    loadChildren: () =>
      import('./favorite-page/favorite-routing.module').then(
        (m)=> m.FavoriteRoutingModule
      )
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule]
})
export class privateRoutingModule { }
