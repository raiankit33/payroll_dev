import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUnique',
  pure: false
})

export class RemoveDuplicatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        // Remove the duplicate elements
        var art = value.map(x=>{
            return x.ArticleTags.map(y=>{ return y.value;});;
        }).reduce((acc,ele,i)=>{
            acc = acc.concat(ele);
            return acc;
        });
        return new Set(art);
    }
}





// @Pipe({
//   name: 'filterUnique',
//   pure: false
// })
// export class FilterPipe implements PipeTransform {

//   transform(value: any, args?: any): any {
    
    // Remove the duplicate elements
    // let uniqueArray = value.filter(function (el, index, array) { 
    //   return array.indexOf(el) == index;
    // });
    
//     let uniqueArray = Array.from(new Set(value));
    
//     return uniqueArray;
//   }

// }