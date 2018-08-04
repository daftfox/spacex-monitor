import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'thousand'})
export class ThousandPipe implements PipeTransform {
  transform(value: number, decimals: number): string {
    return `${(value / 1000).toFixed(decimals !== null ? decimals : 2)}`;
  }
}
