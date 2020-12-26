import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, locale: 'pt-BR'): any {

    if(value.length<10){
      return value;
    }

    let dataArray = value.slit('-');

    if(dataArray.length != 4){
      return value;
    }

    let data = new Date(dataArray[0], dataArray[1]-1, dataArray[2]);

    return Intl.DateTimeFormat(locale).format(data);
  }

}
