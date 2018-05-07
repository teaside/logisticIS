import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'hmFilter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, value: string, field: string): any {
    if (items.length === 0 || !value) {
      return items;
    }
    console.log('items ', items);
    console.log('value ', value);
    console.log('field ', field);
    return items.filter((i) => {
      if (!isNaN(i[field])) {
        i[field] += '';
      }

      return i[field].toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
  }
}
