/// <reference types="cypress"/>
import { RenderCamera } from '../../../src/render/RenderCamera';
import { RenderScene } from '../../../src/render/RenderScene'

describe('RenderScene class tests', () => {
    const scene = new RenderScene();

    // Test constructor
    it('Should initialize', () => {
        expect(scene).to.be.instanceof(RenderScene);
    });

    // Test render throws
    it('Render throw on camera', () => {
        try {
            expect(scene.render(document.createElement('canvas').getContext('2d')));
            expect(false).to.be.true;
        } catch(e) {
            expect(true).to.be.true;
        }
    });

    // Setup camera and test render again
    it('Test render with camera instance', () => {
        scene.camera = new RenderCamera();
        try {
            scene.render(document.createElement('canvas').getContext('2d'));
            expect(true).to.be.true;
        } catch(e) {
            expect(false).to.be.true;
        }
    });
});