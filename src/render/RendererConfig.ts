/** Renderer config reference */
export type RendererConfig = {
    
    /** Should the canvas be stretched to fit the object */
    adjust?: boolean,

    /** Custom canvas size */
    size?: {
        width: number,
        height: number
    },

    /** Antialiasing */
    antialias?: boolean
}