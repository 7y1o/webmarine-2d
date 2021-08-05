/// <reference types="cypress" />
import { RenderCamera } from '../../../src/render/RenderCamera';

describe('RenderCamera tests', () => {
    const cam = new RenderCamera();
    
    // Test constructor
    it('Should initialize', () => {
        expect(cam).to.be.instanceof(RenderCamera);
    });

    // Position vector set
    it('Should position vector set correctly', () => {
        expect(cam.position.value[0] == 0).to.be.true;
        expect(cam.position.value[1] == 0).to.be.true;
    });

    // Scale vector set
    it('Should scale vector set correctly', () => {
        expect(cam.scale.value[0] == 1).to.be.true;
        expect(cam.scale.value[1] == 1).to.be.true;
    });

    // Test transform method
    it('Transform method works correctly', () => {
        try {
            cam.transform(document.createElement('canvas').getContext('2d'));
            expect(true).to.be.true;
        } catch(e) {
            expect(false).to.be.true;
        }
    });
});
