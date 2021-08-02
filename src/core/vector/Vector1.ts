import { Vector } from "./Vector";

/** Two-dimensional vector */
export class Vector1 extends Vector {
    
    /** Value of the vector */
    public value: [number];

    /** Make vector */
    public constructor(x: number) {
        super();
        this.value = [x];
    }
}
