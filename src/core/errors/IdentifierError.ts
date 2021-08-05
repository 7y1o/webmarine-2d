/** Error type for identifiers */
export class IdentifierError extends Error {
    private readonly messageBase = 'Cannot add identifier';
    public readonly message: string;

    public constructor(err: string) {
        super();
        this.message = [this.messageBase, err].join(': ');
    }
}