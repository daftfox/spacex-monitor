import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'https' })
export class HttpsPipe implements PipeTransform {
  transform(url: string) {
    if (!this.isHttps(url)) {
        if (this.isImgur(url)) {
            return url.replace('http', 'https');
        }
    } else {
        return url;
    }
  }

  private isImgur(url: string): boolean {
    return url.indexOf('i.imgur') !== -1;
  }

  private isHttps(url: string): boolean {
    return url.indexOf('https://') !== -1;
  }
} 