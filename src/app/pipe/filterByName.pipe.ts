import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
  transform(items: any[], term: string): any[] {

    if (!items || !term) {
      return items;
    }

    term = term.toLowerCase();
    console.log("pipeeeee", items.filter(item => item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term)));
    return items.filter(item => item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term));
  }
}
