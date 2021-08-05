/** Renderer config reference */
export type RendererConfig = {
    
    /** Should the canvas fill entire window */
    fullscreen?: boolean,

    /** Custom canvas size */
    size?: {
        width: number,
        height: number
    },

    /** Antialiasing */
    antialias?: boolean
}