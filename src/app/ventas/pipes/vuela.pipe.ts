import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform{

  transform(isVuela: boolean): string {
    return isVuela === true ? 'vuela' : 'no vuela';
  }

}
