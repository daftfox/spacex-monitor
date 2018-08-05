import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'division'})
export class DivisionPipe implements PipeTransform {
  transform(value: number, divideBy: number, decimals: number): string {
    return `${(value / divideBy).toFixed(decimals !== null ? decimals : 2)}`;
  }
}
