import { FilterMapReduce } from "./operations.js";

/**
 * Clase que implementa la operación de multiplicación
 */
export class FilterMapProdReduce extends FilterMapReduce{
    constructor(nums: number[]) {
        super(nums);
    }
    
    protected reduce(): number {
        let acc = 1;
        for (let i = 0; i < this.nums.length; i++) {
            acc = acc * this.nums[i];
        }
        return acc;
    }
}