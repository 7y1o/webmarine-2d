export type RendererConfig = {

    /** Custom width of canvas */
    width?: number,

    /** Custom height of canvas */
    height?: number,

    /** Should canvas stretch to bounds of parent element */
    adjust?: boolean,

    /** Antialiasing options */
    antialias?: {
        enabled?: boolean,
        quality?: 'high' | 'medium' | 'low'
    },

    /** HTML identifier of the existent canvas element */
    id?: string,

    /** FPS limit or false if has no limits */
    fps?: number | false,

    /** Custom CSS styles */
    style?: string,

    /** Should canvas be resized when the window is resized */
    resizeTrack?: boolean,

    /** Element that the canvas size depends on */
    dependsElement?: Window | HTMLElement
};