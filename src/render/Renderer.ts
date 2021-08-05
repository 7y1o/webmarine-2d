import {RendererObservable} from "../core/observer/RendererObservable";
import {RendererConfig} from "./RendererConfig";
import {RenderScene} from "./RenderScene";

/** Game engine renderer */
export class Renderer {

    /** Canvas holder */
    protected canvas: HTMLCanvasElement;

    /** Canvas context holder */
    protected ctx: CanvasRenderingContext2D;

    /** Events */
    protected events: RendererObservable;

    /** Scene holder */
    protected scene: RenderScene;

    /** Construct renderer */
    public constructor(config?: RendererConfig) {
        if (!config)
            config = {};

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.events = new RendererObservable();
    }
}