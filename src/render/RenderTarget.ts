import {Vector2} from "../core/vector/Vector2";
import {IdentifierError} from "../core/errors/IdentifierError";

/** Any displaying object */
export class RenderTarget {

    /** Unique identifier */
    private readonly _id: string;

    /** Position vector */
    protected _position: Vector2;

    /** Scale vector */
    protected _scale: Vector2;

    /** Rotation (in degrees) */
    protected _rotation: number;

    /** Make render target */
    public constructor(id?: string) {
        if (!(/[A-z0-9]/).test(id)) {
            throw new IdentifierError('the identifier must use only the English alphabet, numbers, as well as the characters "-" and "_"');
        }

        if (!id) {
            const dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890_-';
            let result = '';
            for (let i = 0; i < 32; i++) {
                result += dict[Math.floor(Math.random() * dict.length)];
            }
        }

        this._id = id;

        this._position = new Vector2(0, 0);
        this._scale = new Vector2(1, 1);
        this._rotation = 0;
    }

    /** Get render target id */
    public get id(): string {
        return this._id;
    }

    /** Position vector getter */
    public get position(): Vector2 {
        return this._position;
    }

    /** Scale vector getter */
    public get scale(): Vector2 {
        return this._scale;
    }

    /** Rotation getter */
    public get rotation(): number {
        return this._rotation;
    }

    /** Rotation setter */
    public set rotation(val: number) {
        this._rotation = val;
    }

    /** Render */
    public render(ctx: CanvasRenderingContext2D): void {
        ctx.restore();
    }
}
