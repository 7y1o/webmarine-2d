import { Observable } from "../core/Observable";

/** Renderer observable class */
export abstract class RendererObservable extends Observable {
    public abstract on(event: 'before_render' | 'after_render', callback: void): number;
    public abstract once(event: 'before_render' | 'after_render', callback: void): number;
    public abstract off(event: 'before_render' | 'after_render', id: number): void;
    public abstract emit(event: 'before_render' | 'after_render', ...data: any[]): void;
}