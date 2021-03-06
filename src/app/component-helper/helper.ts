export abstract class Helper<T> {
    PIPE(...items: T[]): T[] {
        let state: T[] = [];
        if (Array.isArray(items)) {
            for (const item of items) {
                state = typeof item === 'function' ? item(state) : item;
            }
        }
        return state;
    }

    /**
     *  CONCAT_ALL()
     *
     * a function that sequentially calls a function with the previous value passed
     * to it and receives the data and puts it in a variable for the next reuse
     */

    CONCAT_ALL(data: T[]): T[] {
        return Array.isArray(data) ? data.reduce<T[]>((flat: T[], toFlatten: T) => {
            return flat.concat(
                Array.isArray(toFlatten) ? this.CONCAT_ALL(toFlatten) : toFlatten
            );
        }, []) : [];
    }


    /**
     *  CONCAT_ALL()
     *
     *  combine all arrays that are in the middle of other arrays into one array
     */

    getDateAllSec(year: number, month: number, date: number): string {
        return new Date(year, month, date).getTime().toString();
    }

    /**
     *  getDateAllSec()
     *
     * create date by year, month and day
     * and convert to seconds
     */

    getDataSourceArray(array: T[], name: string): T[] {
        return [...(array || [])]
            .map<T>((i: T ): T => i[name])
            .filter((_: T ): boolean => !!_);
    }

    /**
     *  getDataSourceArray()
     *
     * convert to an array of primitives by prop
     */

}
