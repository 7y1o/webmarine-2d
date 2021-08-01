/** Observer reference */
export type Observer = {
    
    /** Callback function */
    callback(): void,

    /** Will it be called once */
    once: boolean
};