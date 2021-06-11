import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monPipe'
})
export class MonPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // value est le contenu à modifier
    // Ici on rajoutera un hashtag (#) avant la valeur
    return `#${value}`;
  }

}
