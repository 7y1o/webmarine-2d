import { Camera } from "./Camera";
import { RenderTarget } from "./RenderTarget";

/** Scene with render targets */
export class Scene {
    
    /** Render target objects array */
    protected children: RenderTarget[];

    /** Cameras array */
    protected cameras: Camera[];
};