/** Observable base */
export class Observable {
    protected listeners;

    /** Make observable */
    public constructor() {
        this.listeners = {};
    }

    /** Bind observer */
    public on(event: string, callback: void): number {
        if (!this.listeners[event])
            this.listeners[event] = [];

        this.listeners[event].push({ once: false, callback });
        return this.listeners[event].length - 1;
    }

    /** Bind observer that will called once */
    public once(event: string, callback: void): number {
        if (!this.listeners[event])
            this.listeners[event] = [];
        
        this.listeners[event].push({ once: true, callback });
        return this.listeners[event].length - 1;
    }

    /** Unbind listener */
    public off(event: string, id: number): void {
        if (!this.listeners[event]?.[id])
            return;
        
        this.listeners[event] = this.listeners[event].slice(id, 1);
    }

    /** Emit event to observers */
    public emit(event: string, ...args: any[]): void {
        if (!this.listeners[event])
            return;

        for (const obId in this.listeners[event]) {
            this.listeners[event][obId].callback();

            if (this.listeners[event][obId].once) {
                this.listeners[event] = this.listeners[event].slice(obId, 1);
            }
        }
    }
}