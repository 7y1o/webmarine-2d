import { RendererObservable } from '../renderer/RendererObservable';
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
}