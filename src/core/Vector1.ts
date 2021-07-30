/** One-dimensional vector */
export class Vector1 {
    protected data: [number];

    /** Make vector */
    public constructor(x: number) {
        this.data[0] = x;
    }

    /** Get value */
    public get value(): [number] {
        return this.data;
    }

    /** Set value */
    public set(x: number): void {
        this.data[0] = x;
    }

    /** Copy value from another vector */
    public copy(vec: Vector1): void {
        this.data[0] = vec.value[0];
    }

    /** Add vector */
    public add(vec: Vector1): void {
        this.data[0] += vec.value[0];
    }

    /** Substract vector */
    public sub(vec: Vector1): void {
        this.data[0] -= vec.value[0];
    }
};