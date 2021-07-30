export class Renderer {

    /**
     * @description Canvas holder
     */
    protected canvas: HTMLCanvasElement;

    /**
     * @description 2D rendering context of canvas
     */
    protected ctx: CanvasRenderingContext2D;

    /**
     * @description Limit framerate
     */
    protected fps: number | false;

    /**
     * @description 
     */

    constructor(id?: string) {
        if (id) 
            this.canvas = <HTMLCanvasElement>document.getElementById(id);

        this.canvas = this.canvas ?? <HTMLCanvasElement>document.createElement('canvas');
    }
}