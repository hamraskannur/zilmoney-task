import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/core/interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: User[]|null, field:string,searchData:string): User[]|null {

    if(value){
      const i=new RegExp(searchData)
      if(field==='name'){
       return value.filter((item)=>item.name.match(i))
      }else if(field==='companyName'){
        return value.filter((item)=>item.company.name.match(i))
      }else if(field==='designation'){
        return value.filter((item)=>item.company.designation.match(i))
      }
    }
    return null;
  }

}
