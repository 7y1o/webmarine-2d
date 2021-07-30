import { Vector2 } from "../core/Vector2";
import { Filter } from "./Filter";

/** Any displayed object */
export class RenderTarget {

    /** Display source */
    protected source: CanvasImageSource;

    /** Position */
    protected _position: Vector2;

    /** Scale */
    protected _scale: Vector2;

    /** Rotation angle (in degrees) */
    protected _rotation: number;

    /** Filters array */
    protected filters: Filter[];

    /** Make render target */
    public constructor() {
        this.source = new HTMLCanvasElement();
        this._position = new Vector2(0, 0);
        this._scale = new Vector2(1, 1);
        this._rotation = 0;
        this.filters = [];
    }

    /** Position getter */
    public get position(): Vector2 {
        return this._position;
    }

    /** Scale getter */
    public get scale(): Vector2 {
        return this._scale;
    }

    /** Rotation getter */
    public get rotation(): number {
        return this._rotation;
    }

    /** Move object */
    public move(vec: Vector2): void {
        this._position.add(vec);
    }

    /** Rotate object (in degrees) */
    public set rotate(angle: number) {
        this._rotation += angle;
    }

    /** Render */
    public render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = '#ff6900';
        ctx.fillRect(16, 16, 32, 64);
    }
}