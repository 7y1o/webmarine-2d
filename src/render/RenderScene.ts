/** Renderer scene */
import { CameraNotFoundError } from "../core/errors/CameraNotFoundError";
import { RenderCamera } from "./RenderCamera";
import { RenderTarget } from "./RenderTarget";

export class RenderScene {

    /** Array of items on the scene */
    private _children: RenderTarget[];

    /** Current working camera */
    private _camera: RenderCamera;

    /** Make scene */
    public constructor() {
        this._children = [];
    }

    /** Render targets getter */
    public get children(): RenderTarget[] {
        return this._children;
    }

    /** Camera getter */
    public get camera(): RenderCamera {
        return this._camera;
    }

    /** Camera setter */
    public set camera(val: RenderCamera) {
        this._camera = val;
    }

    /** Render scene */
    public render(ctx: CanvasRenderingContext2D): void {
        if (!this._camera) {
            throw new CameraNotFoundError();
        }

        this._camera.transform(ctx);

        for (const child of this._children) {
            child.render(ctx);
        }
    }
}