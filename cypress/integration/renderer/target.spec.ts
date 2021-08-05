/// <reference types="cypress"/>
import { Vector2 } from '../../../src/core/vector/Vector2';
import { RenderTarget } from '../../../src/render/RenderTarget';

describe('RenderTarget tests', () => {
    const tg = new RenderTarget();

    // Test constructor
    it('Should initialize', () => {
        expect(tg).to.be.instanceof(RenderTarget);
    });

    // Test initializing with id
    it('Should initialize with custom correct identifier', () => {
        try {
            new RenderTarget('test');
            expect(true).to.be.true;
        } catch(e) {
            expect(false).to.be.true;
        }
    });

    // Test initializing with incorrect id
    it('Should initialize with custom incorrect identifier', () => {
        try {
            new RenderTarget('.!.');
            expect(false).to.be.true;
        } catch(e) {
            expect(true).to.be.true;
        }
    });

    // Test position
    it('Should position vector initialized', () => {
        expect(tg.position).to.be.instanceof(Vector2);
    });

    // Test scale
    it('Should scale vector initialized', () => {
        expect(tg.scale).to.be.instanceof(Vector2);
    });

    // Render does not throws exception
    it('Should render works properly', () => {
        try {
            tg.render(document.createElement('canvas').getContext('2d'));
            expect(true).to.be.true;
        } catch(e) {
            expect(false).to.be.true;
        }
    });
});
