import { Vector } from "./Vector";

/** Two-dimensional vector */
export class Vector1 extends Vector {
    
    /** Value of the vector */
    public value: [number, number];

    /** Make vector */
    public constructor(x: number, y: number) {
        super();
        this.value = [x, y];
    }
};
