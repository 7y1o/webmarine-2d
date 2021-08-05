/** Error type for non existent camera instance in scene */
export class SceneNotFoundError extends Error {
    public readonly message = 'Cannot find scene in the render engine';
}