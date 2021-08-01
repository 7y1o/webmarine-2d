import { ExistsError } from "../errors/ExistsError";
import { NotFoundError } from "../errors/NotFoundError";
import { Observer } from "./Observer";

/** Observable class */
export class Observable {

    /** Array of listeners */
    protected listeners: { event?: Observer[] };

    /** Array of events */
    protected readonly events: 'event';

    /** Make observable */
    public constructor() {
        this.listeners = {};
    }

    /** Register observer */
    public on(event: typeof this.events, callback: () => void): number {
        if (!this.listeners[event])
            this.listeners[event] = [];

        if (this.listeners[event].find(i => i.callback === callback))
            throw new ExistsError();

        this.listeners[event].push({ callback, once: false });
        return this.listeners[event].length - 1;
    }

    /** Register observer for one-time call */
    public once(event: typeof this.events, callback: () => void): number {
        if (!this.listeners[event])
            this.listeners[event] = [];

        if (this.listeners[event].find(i => i.callback === callback))
            throw new ExistsError();

        this.listeners[event].push({ callback, once: true });

        console.log('Before obj is', this.listeners);
        
        console.log('Registered new once');
        console.log('Now object is', this.listeners);
        
        return this.listeners[event].length - 1;
    }

    /** Unregister observer */
    public off(event: typeof this.events, id: number): void {
        if (!this.listeners[event][id])
            throw new NotFoundError();

        this.listeners[event].filter((v,i) => i !== id);
        console.log('Cleared. Now array is:' + JSON.stringify(this.listeners));
    }

    /** Emit event */
    public emit(event: typeof this.events): void {
        if (!this.listeners[event] || this.listeners[event].length < 1)
            return;

        for (let i = 0; i < this.listeners[event].length; i++) {
            this.listeners[event][i].callback();

            console.log('Checking once');
            
            if (this.listeners[event][i].once) {
                console.log('Once handled');
                this.off(event, i);
            }
        }
    }

    /** Clear observers of event */
    public clear(event: typeof this.events | null): void {
        this.listeners[event] = [];
    }
}
