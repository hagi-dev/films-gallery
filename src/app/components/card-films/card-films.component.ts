import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'card-films',
  templateUrl: './card-films.component.html',
  styleUrls: ['./card-films.component.scss']
})
export class CardFilmsComponent {
  @Input() title = '';
  @Input() tag: string = '';
  @Input() urlImage = '';
  @Input() id!: number;

  @Output() $click = new EventEmitter<number>();

  onClick(id: number){
    if(id){
      this.$click.emit(id);
    }
  }
}
