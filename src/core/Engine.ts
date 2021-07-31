import { EngineConfig } from "./refs/EngineConfig";
import { Renderer } from "./Renderer";

/** Entry point of game engine */
export class Engine {

    /** Renderer class holder */
    protected renderer: Renderer;

    /** Engine constructor */
    public constructor(config?: EngineConfig) {
        if (!config) config = {};

        this.renderer = new Renderer(config.renderer ?? {});
    }

    /** Start game */
    public start(): void {
        this.renderer.start();
    }

    /** Pause game */
    public pause(): void {
        this.renderer.running = false;
    }

    /** Stop game */
    public stop(): void {
        this.renderer.running = false;
        this.renderer.clear();
    }
}
