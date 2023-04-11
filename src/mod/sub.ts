import { FilterMapReduce } from "./operations.js";

/**
 * Clase que implementa la operación de resta
 */
export class FilterMapSubReduce extends FilterMapReduce{
    constructor(nums: number[]) {
        super(nums);
    }

    protected reduce(): number {
        let acc = 0;
        for (let i = 0; i < this.nums.length; i++) {
            acc = acc - this.nums[i];
        }
        return acc;
    }
    
}