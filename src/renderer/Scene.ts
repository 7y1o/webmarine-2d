import { Camera } from "./Camera";
import { RenderTarget } from "./RenderTarget";

/** Scene with render targets */
export class Scene {
    
    /** Render target objects array */
    protected children: RenderTarget[];

    /** Cameras array */
    protected cameras: Camera[];

    /** Active camera (only link from array "cameras" */
    protected activeCamera: Camera;

    /** Make scene */
    public constructor() {
        this.children = [];
        this.cameras = [];
        this.activeCamera = null;
    }

    /** Check scene for errors */
    public check(): void {
        if (this.cameras.length < 1)
            throw '[WMC2D] Error on scene check: no active camera';
        
        if (!this.activeCamera)
            throw '[WMC2D] Error on scene check: no cameras available';

        if (this.children.length < 1)
            console.warn('[WMC2D] Warning on scene check: scene is empty');

        // TODO: Make check for active camera position
    }

    /** Render action */
    public render(ctx: CanvasRenderingContext2D): void {
        for (const child of this.children) {
            child.render(ctx);
        }
    }
};