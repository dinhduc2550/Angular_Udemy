import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false//cho phep pipe xu ly du lieu duoc them vao mang sau khi an btn add
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string,propName:string): any {
    if(value.length===0||filterString===''){
      return value;
    }
    for(const item of value){
      const rsArr = []
      if(item[propName]===filterString){
            rsArr.push(item)
      }
      return rsArr
    }
  }

}
