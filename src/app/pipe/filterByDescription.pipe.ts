import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {
  transform(items: any[], term: string): any[] {
    if (!items || !term) {
      return items;
    }

    term = term.toLowerCase();

    return items.filter(item => item.name.toLowerCase().includes(term));
  }
}
