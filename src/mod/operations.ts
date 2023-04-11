//Template Method Pattern
export abstract class FilterMapReduce {
    protected nums: number[]; 

    /**
     * Constructor de la clase
     * @param nums Números a los que se les aplicará el patrón
     */
    constructor(nums: number[]) {
        this.nums = nums;
    }

    /**
     * Método que ejecuta el patrón
     * @param filter Función que filtra los números
     * @param map Función que mapea los números
     * @returns Número resultante de aplicar el patrón
    */
    public run(filter: (num: number) => boolean, map: (num: number) => number): number {
        this.nums = this.filter(filter);
        this.nums = this.map(map);
        const result = this.reduce();
        return result;
    }

    /**
     * Método que filtra los números
     * @param callback Función que filtra los números
     * @returns Números filtrados
     */
    protected filter(callback: (num: number) => boolean): number[] {
        const filtered: number[] = [];
        for (const num of this.nums) {
            if (callback(num)) {
                filtered.push(num);
            }
        }
        return filtered;
    }

    /**
     * Método que mapea los números
     * @param callback Función que mapea los números
     * @returns Números mapeados
     */
    protected map(callback: (num: number) => number): number[] {
        const mapped: number[] = [];
        for (const num of this.nums) {
            mapped.push(callback(num));
        }
        return mapped;
    }

    /**
     * Método abstracto que reduce los números
     */
    protected abstract reduce(): number;
}
