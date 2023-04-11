import 'mocha';
import {expect} from 'chai';
import { FilterMapReduce } from '../src/mod/operations.js';
import {FilterMapAddReduce} from '../src/mod/add.js';
import {FilterMapSubReduce} from '../src/mod/sub.js';
import {FilterMapProdReduce} from '../src/mod/prod.js';
import {FilterMapDivReduce} from '../src/mod/div.js';

describe('Tests' , () => {
    it('add', () => {
        function clientCode(fmr: FilterMapReduce):number {
            return fmr.run((num: number) => num > 5, (num:number) => num + 2);
        }
        expect(clientCode(new FilterMapAddReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))).to.equal(50);
    });
    it('subtract', () => {
        function clientCode(fmr: FilterMapReduce):number {
            return fmr.run((num: number) => num > 5, (num:number) => num + 2);
        }
        expect(clientCode(new FilterMapSubReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))).to.equal(-50);
    });
    it('multiply', () => {
        function clientCode(fmr: FilterMapReduce):number {
            return fmr.run((num: number) => num > 8, (num:number) => num + 2);
        }
        expect(clientCode(new FilterMapProdReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))).to.equal(132);
    });
    it('divide', () => {
        function clientCode(fmr: FilterMapReduce):number {
            return fmr.run((num: number) => num > 9, (num:number) => num + 2);
        }
        expect(clientCode(new FilterMapDivReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))).to.equal(0.08333333333333333);
    });     
});