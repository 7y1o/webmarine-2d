import { SceneNotFoundError } from "../core/errors/SceneNotFoundError";
import { RendererObservable } from "../core/observer/RendererObservable";
import { RendererConfig } from "./RendererConfig";
import { RenderScene } from "./RenderScene";

/** Game engine renderer */
export class Renderer {

    /** Canvas holder */
    protected canvas: HTMLCanvasElement;

    /** Canvas context holder */
    protected ctx: CanvasRenderingContext2D;

    /** Events */
    protected events: RendererObservable;

    /** Scene holder */
    protected _scene: RenderScene;

    /** Delta time */
    protected _delta: number;

    /** Render state */
    protected state: boolean;

    /** Construct renderer */
    public constructor(config?: RendererConfig) {
        if (!config)
            config = {};

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.events = new RendererObservable();
        this.state = false;

        // Check adjust and size config parameters
        if (config.fullscreen) {
            this.canvas.style.position = 'fixed';
            this.canvas.style.zIndex = '1000';
            this.canvas.style.width = window.innerWidth.toString();
            this.canvas.style.height = window.innerHeight.toString();
            this.canvas.style.top = '0';
            this.canvas.style.left = '0';
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        } else {
            if (config.size) {
                this.canvas.width = config.size.width;
                this.canvas.height = config.size.height;
            } else {
                if (this.canvas.parentElement) {
                    this.canvas.width = this.canvas.parentElement.offsetWidth;
                    this.canvas.height = this.canvas.parentElement.offsetHeight;
                }
            }
        }

        // Check antialias config parameter
        if (config.antialias) {
            this.ctx.imageSmoothingEnabled = true;
        }

        // Add canvas to the body
        document.body.append(this.canvas);
    }

    /** Get delta time */
    public get delta(): number {
        return this.isRunning ? this._delta : Infinity;
    }

    /** Renderer state getter */
    public get isRunning(): boolean {
        return this.state;
    }

    /** Events getter */
    public get event(): RendererObservable {
        return this.events;
    }

    /** Scene getter */
    public get scene(): RenderScene {
        return this._scene;
    }

    /** Scene setter */
    public set scene(val: RenderScene) {
        this._scene = val;
    }

    /** Check method */
    public check(): void {
        if (!this._scene) {
            throw new SceneNotFoundError();
        }
    }

    /** Render */
    public render(): void {
        if (this.state) {
            console.warn('Cannot start render engine: already running');
            return;
        }

        // [0] - last time, [1] - current time, [2] - delta time
        const timeStack = [Date.now(), 0, 0];

        const loop = () => {
            timeStack[1] = Date.now();
            timeStack[2] = timeStack[1] - timeStack[0];
            timeStack[0] = timeStack[1];

            this.events.emit('before');
            this._scene.render(this.ctx);
            this.events.emit('after');

            if (this.state) {
                requestAnimationFrame(() => loop());
            }
        };

        this.state = true;
        loop();
    }
}