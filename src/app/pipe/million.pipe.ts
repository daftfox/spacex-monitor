import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'million'})
export class MillionPipe implements PipeTransform {
  transform(value: number, decimals: number): string {
    return `${(value / 1000000).toFixed(decimals !== null ? decimals : 2)}`;
  }
}
