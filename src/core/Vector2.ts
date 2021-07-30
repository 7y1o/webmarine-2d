/** Two-dimensional vector */
export class Vector2 {
    protected data: [number, number];

    /** Make vector */
    public constructor(x: number, y: number) {
        this.data[0] = x;
        this.data[1] = y;
    }

    /** Get value */
    public get value(): [number, number] {
        return this.data;
    }

    /** Set value */
    public set(x: number, y: number): void {
        this.data[0] = x;
        this.data[1] = y;
    }

    /** Copy value from another vector */
    public copy(vec: Vector2): void {
        this.data[0] = vec.value[0];
        this.data[1] = vec.value[1];
    }

    /** Add vector */
    public add(vec: Vector2): void {
        this.data[0] += vec.value[0];
        this.data[1] += vec.value[1];
    }

    /** Substract vector */
    public sub(vec: Vector2): void {
        this.data[0] -= vec.value[0];
        this.data[1] -= vec.value[1];
    }
}