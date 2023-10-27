// search-box.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  searchTerm: string = '';
  @Output() $change = new EventEmitter<string>();

  onChange() {
    this.$change.emit(this.searchTerm);
  }
  cleanText(){
    this.searchTerm = '';
    this.$change.emit('');
  }
}

