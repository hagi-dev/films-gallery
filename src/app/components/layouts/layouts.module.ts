import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [FormsModule, ComponentsModule],
  providers: [],
})
export class LayoutsModule { }
