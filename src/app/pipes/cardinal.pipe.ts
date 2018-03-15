import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cardinal' })
export class CardinalPipe implements PipeTransform {
  transform(num: number) {
    if (num < 10) {
      return num + this.getCardinality(num);
    } else {
      const numStr = num + '';
      return num + this.getCardinality(parseInt(numStr[numStr.length - 1]));
    }
  }

  private getCardinality(num: number): string {
    let cardinality: string;
    switch(num) {
      case 1:
        cardinality = 'st';
        break;
      case 2:
        cardinality = 'nd';
        break;
      case 3:
        cardinality = 'rd';
        break;
      default:
        cardinality = 'th';
        break;
    }
    return cardinality;
  }
} 