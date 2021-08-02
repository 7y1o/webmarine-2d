import { Observable } from "./Observable";
import { Observer } from "./Observer";

/** Renderer observable */
export abstract class RendererObservable extends Observable {
    
    /** Observers */
    protected listeners: { event?: Observer[], before?: Observer[], after?: Observer[] };

    /** Event types */
    private events: 'before' | 'after';

    public abstract on(event: typeof this.events, callback: () => void): number;
    public abstract once(event: typeof this.events, callback: () => void): number;
    public abstract off(event: typeof this.events, id: number): void;
    public abstract emit(event: typeof this.events): void;
    public abstract clear(event?: typeof this.events): number;
}
