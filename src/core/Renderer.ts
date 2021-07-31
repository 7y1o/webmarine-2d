import { Scene } from '../renderer/Scene';
import { RendererObservable } from '../renderer/events/RendererObservable';
import type {RendererConfig} from './refs/RendererConfig';

/** Canvas renderer */
export class Renderer {

    /** Canvas holder */
    protected canvas: HTMLCanvasElement;

    /** 2D rendering context of canvas */
    protected ctx: CanvasRenderingContext2D;

    /** Limit fps */
    protected fps: number | false;

    /** Event listeners */
    protected readonly obersvable: RendererObservable;

    /** Working scene */
    protected scene: Scene;

    /** Is render running */
    protected _running: boolean;

    /** Construct renderer and get canvas with canvas context */
    public constructor(config?: RendererConfig) {
        if (!config) config = {};
        if (!config.id || !document.getElementById(config.id) || !(document.getElementById(config.id) instanceof HTMLCanvasElement)) {
            this.canvas = document.createElement('canvas');
            document.body.appendChild(this.canvas);
        } else {
            this.canvas = <HTMLCanvasElement>document.getElementById(config.id);
        }

        // Setup canvas rendering context and fps limit
        this.ctx = this.canvas.getContext('2d');
        this.fps = config.fps ?? false;
        
        // Setup width, height, adjust and antialiasing
        this.canvas.width = config.width || config.adjust ? this.canvas.parentElement.offsetWidth : 800;
        this.canvas.width = config.height || config.adjust ? this.canvas.parentElement.offsetHeight : 600;
        this.ctx.imageSmoothingEnabled = config.antialias?.enabled ?? true;
        this.ctx.imageSmoothingQuality = config.antialias?.enabled ? config.antialias?.quality ?? 'medium' : 'medium';
        this.canvas.style.cssText = config.style ?? `
            width: ${config.adjust ? '100%' : (config.width ?? 800) + 'px' };
            height: ${config.adjust ? '100%' : (config.height ?? 800) + 'px' };
        `;

        // Setup resize canvas on window resize
        if (config.resizeTrack) {
            window.addEventListener('resize', () => {
                if (config.dependsElement) {
                    this.canvas.width = config.dependsElement instanceof Window ? config.dependsElement.innerWidth : config.dependsElement.offsetWidth;
                    this.canvas.height = config.dependsElement instanceof Window ? config.dependsElement.innerHeight : config.dependsElement.offsetHeight;
                } else {
                    this.canvas.width = this.canvas.parentElement.offsetWidth;
                    this.canvas.height = this.canvas.parentElement.offsetHeight;
                }
            });
        }
    }

    /** Factory for full-width canvas */
    public static makeFullWith(): Renderer {
        return new Renderer({
            width: window.innerWidth,
            height: window.innerHeight,
            dependsElement: window,
            resizeTrack: true,
            style: `position: fixed;z-index: 10;top: 0;left: 0;right: 0;bottom: 0;`,
            fps: 60
        });
    }

    /** Event listeners getter */
    public get events(): {on, once, off} {
        return {
            on: this.obersvable.on,
            once: this.obersvable.once,
            off: this.obersvable.off
        };
    }

    /** Set or disable fps limiter */
    public set fpsLimit(val: number | false) {
        this.fps = val;
    }

    /** Push scene */
    public pushScene(scene: Scene): void {
        this.scene = scene;
    }

    /** Set running state */
    public set running(val: boolean) {
        this._running = val;
    }

    /** Get running state */
    public get runnnig() {
        return this._running;
    }

    /** Clear all data from renderer */
    public clear(): void {
        this.scene = null;
        this.obersvable.clear();
    }

    /** Render loop */
    public async start(): Promise<void> {
        if (!this.scene)
            throw '[WMC2D] Error on renderer start: scene not set';
        
        this.scene.check();
        let stack = [Date.now(), 0, 0];

        this._running = true;
        const loop = () => {
            stack[1] = Date.now();
            stack[2] = stack[1] - stack[0];
            stack[0] = stack[1];
            
            this.obersvable.emit('before_render', this.ctx);
            this.scene.render(this.ctx);
            this.obersvable.emit('after_render', this.ctx);

            if (this._running)
                requestAnimationFrame(() => loop());
        };
    }
}