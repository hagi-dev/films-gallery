import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByGender'
})
export class FilterByGenderPipe implements PipeTransform {
  transform(items: any[], genres: string[]): any[] {
    if (!items || !genres.length) {
      return items;
    }

    return items.filter(item => genres.includes(item.genre));
  }
}

