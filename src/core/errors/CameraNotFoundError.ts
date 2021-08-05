/** Error type for non existent camera instance in scene */
export class CameraNotFoundError extends Error {
    public readonly message = 'Scene does not contains camera instance';
}