/** Error type for existent items in array */
export class ExistsError extends Error {
    public readonly message = 'Array already contains this item';
}
