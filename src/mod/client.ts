import { FilterMapReduce } from "./operations.js";
import { FilterMapAddReduce } from "./add.js";

function clientCode(fmr: FilterMapReduce):number {
    return fmr.run((num: number) => num > 5, (num:number) => num + 2);
}
  
clientCode(new FilterMapAddReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));