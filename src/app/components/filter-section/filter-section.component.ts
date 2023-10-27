// filter-section.component.ts
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { OptionsFormatSelected, OptionsSelect } from 'src/app/types/common';

@Component({
  selector: 'filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {
  @ViewChild('container_select') containerSelect!: ElementRef;

  @Input() options: OptionsSelect[] = [
    { "label": "Action", "value": "Action" },
    { "label": "Science Fiction", "value": "Science Fiction" },
    { "label": "Crime", "value": "Crime" },
    { "label": "Drama", "value": "Drama" },
    { "label": "Fantasy", "value": "Fantasy" },
    { "label": "Thriller", "value": "Thriller" },
    { "label": "Romance", "value": "Romance" }
  ];

  @Output() $change = new EventEmitter<OptionsSelect[]>();

  optionsFormat: OptionsFormatSelected[] =[];
  isShowSection: boolean = false;
  selectLength: number = 0;

  ngOnInit(): void {
    this.optionsFormat = this.options.map((item)=> ({...item, isSelected: false}))
  }

  onChange(){
    const optionSelected = this.optionsFormat
      .filter(option => option.isSelected)
      .map(option => ({label: option.label, value: option.value}));
    this.selectLength = optionSelected.length;
    this.$change.emit(optionSelected);
  }

  onShowSection(){
    this.isShowSection = !this.isShowSection;
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
    const element = this.containerSelect.nativeElement;

    if (!element.contains(clickedElement)) {
      this.handleClickOutside();
    }
  }

  handleClickOutside() {
    this.isShowSection = false;
  }
}
