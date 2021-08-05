import { Vector2 } from "../core/vector/Vector2";

/** Camera class */
export class RenderCamera {
    
    /** Camera position */
    private _position: Vector2;

    /** Camera scale */
    private _scale: Vector2;

    /** Make camera */
    public constructor() {
        this._position = new Vector2(0, 0);
        this._scale = new Vector2(1, 1);
    }
    
    /** Position vector getter */
    public get position(): Vector2 {
        return this._position;
    }

    /** Scale vector getter */
    public get scale(): Vector2 {
        return this._scale;
    }

    /** Set transformations on canvas */
    public transform(ctx: CanvasRenderingContext2D): void {
        if (this._position.value != [0, 0]) {
            ctx.translate(this._position.value[0], this._position.value[1]);
        }

        if (this._scale.value != [1, 1]) {
            ctx.scale(this._scale.value[0], this._scale.value[1]);
        }
    }
}