/** Renderer scene */
import { RenderCamera } from "./RenderCamera";
import { RenderTarget } from "./RenderTarget";

export class RenderScene {

    /** Array of items on the scene */
    private _children: RenderTarget[];

    /** Current working camera */
    private camera: RenderCamera;

    /** Render targets getter */
    public get children(): RenderTarget[] {
        return this._children;
    }

    /** Render scene */
    public render(ctx: CanvasRenderingContext2D): void {
        this.camera.transform(ctx);

        for (const child of this._children) {
            child.render(ctx);
        }
    }
}