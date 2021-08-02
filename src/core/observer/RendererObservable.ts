import { Observable } from "./Observable";
import { Observer } from "./Observer";

/** Renderer observable */
export class RendererObservable extends Observable {
    
    /** Observers */
    protected listeners: { event?: Observer[], before?: Observer[], after?: Observer[] };

    /** Event types */
    protected events: 'before' | 'after';
}
