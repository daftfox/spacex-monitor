import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'https' })
export class HttpsPipe implements PipeTransform {
  transform(url: string) {
    if (!this.isHttps(url)) {
        return `https:${url.split(':')[1]}`;
    } else {
        return url;
    }
  }

  private isHttps(url: string): boolean {
    return url.indexOf('https://') !== -1;
  }
}
