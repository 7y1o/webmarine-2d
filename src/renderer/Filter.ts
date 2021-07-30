/** Filter base class */
export class Filter {
    /** Pipe method */
    public pipe(source: CanvasImageSource): CanvasImageSource {
        return source;
    }
}
