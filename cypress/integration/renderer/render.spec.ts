/// <reference types="cypress"/>
import { RendererObservable } from '../../../src/core/observer/RendererObservable';
import WM from '../../../src/index';

describe('Render engine tests', () => {
    const engine = new WM.Render.Renderer();
    const scene = new WM.Render.RenderScene();
    const camera = new WM.Render.RenderCamera();

    scene.camera = camera;
    engine.scene = scene;

    // Test constructor
    it('Should initialize', () => {
        expect(engine).to.be.instanceof(WM.Render.Renderer);
    });

    // Test scene parameter
    it('Should scene set corretly', () => {
        expect(engine.scene).to.be.instanceof(WM.Render.RenderScene);
    });

    // Test observable parameter
    it('Should observable set correctly', () => {
        expect(engine.event).to.be.instanceof(RendererObservable);
    });

    // Test delta before start
    it('Should delta equals to infinity before start', () => {
        expect(engine.delta).to.be.eq(Infinity);
    });

    // Test start
    it('Should engine start', () => {
        try {
            engine.render();
            expect(true).to.be.true;
        } catch(e) {
            expect(false).to.be.true;
        }
    });

    // Test events
    it('Should events works properly', async () => {
        let count = 0;

        let id = engine.event.on('before', () => {count++});
        engine.event.once('after', () => {engine.event.off('before', id)});

        await new Promise(r => setTimeout(r, 10));
        expect(count).to.be.gt(0);
    });
});