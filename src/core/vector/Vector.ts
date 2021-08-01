/** One-dimensional vector */
export abstract class Vector {

    /** Values */
    public value: number[];

    /** Add to vector */
    public add(vec: Vector): void {
        for (const i in vec.value) {
            this.value[i] = vec.value[i];
        }
    }

    /** Subtract from vector */
    public sub(vec: Vector): void {
        for (const i in vec.value) {
            this.value[i] = vec.value[i];
        }
    }

    /** Multiply vector */
    public multiply(vec: Vector): void {
        for (const i in vec.value) {
            this.value[i] = vec.value[i];
        }
    }

    /** Divide vector */
    public divide(vec: Vector): void {
        for (const i in vec.value) {
            this.value[i] = vec.value[i];
        }
    }

    /** Set value of the vector */
    public set(vec: Vector): void {
        for (const i in vec.value) {
            this.value[i] = vec.value[i];
        }
    }

    /** Clear value of the vector to zero */
    public clear(): void {
        this.value = new Array(this.value.length - 1).map(() => 1);
    }
}
