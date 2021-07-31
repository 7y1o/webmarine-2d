import { Vector1 } from "../core/Vector1";
import { Vector2 } from "../core/Vector2";
import { Filter } from "./Filter";
import { RenderTarget } from "./RenderTarget";

/** Camera class */
export class Camera {
    
    /** Position vector */
    protected _position: Vector2;

    /** Scale (simulate Z-dim) */
    protected _scale: Vector1;

    /** Camera rotation (in degrees) */
    protected _rotation: number;

    /** Tracking object instance */
    protected _tracking: RenderTarget;

    /** Camera filters */
    protected _filters: Filter[];

    /** Make camera */
    public constructor() {
        this._position = new Vector2(0, 0);
        this._scale = new Vector1(1);
        this._tracking = null;
        this._filters = [];
    }
};