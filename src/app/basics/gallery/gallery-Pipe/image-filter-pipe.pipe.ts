import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFilterPipe'
})
export class ImageFilterPipePipe implements PipeTransform {
  transform(items: any[], list: string): any {
    if (list === 'all') {
      return items;
    } else {
      return items.filter(item => {
        return item.category === list;
      });
    }
  }
}
