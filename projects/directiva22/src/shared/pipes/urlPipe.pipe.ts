/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'urlPipe',
  pure: false
})
export class UrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(url: string | '') {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  };
}
