/** Error type for non existent search in array */
export class NotFoundError extends Error {
    public readonly message = 'Item not found';
}