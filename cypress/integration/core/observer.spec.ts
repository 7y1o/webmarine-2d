/// <reference types="cypress" />

import { Observable } from "../../../src/core/observer/Observable";
import { RendererObservable } from '../../../src/core/observer/RendererObservable';

describe('Observable tests', () => {
    describe('Observable base class tests', () => {
        const ob = new Observable();
    
        // Test instance
        it('Should initialize', () => {
            expect(ob).to.be.instanceof(Observable);
        });
    
        // Test on method
        it('Should method "on" works properly', () => {
            const ob2 = new Observable();
            let now = false;
    
            expect(now).to.be.false;
            
            ob2.on('event', () => {now = true});
            ob2.emit('event');
            
            expect(now).to.be.true;
        });
    
        // Test once method
        it('Should method "once" works properly', () => {
            let count = 1;
            
            ob.once('event', () => {count++});
            ob.emit('event');
            
            expect(count).to.be.eq(2);
            
            ob.emit('event');
            
            expect(count).to.be.eq(2);
        });
    
        // Test off method
        it('Should method "off" works properly', () => {
            let count = 15;
            
            let id = ob.on('event', () => {count++});
            ob.emit('event');
    
            expect(count).to.be.eq(16);
    
            ob.off('event', id);
            ob.emit('event');
    
            expect(count).to.be.eq(16);
        });
    
        // Test clear method
        it('Should method "clear" works properly', () => {
            let c1 = 0;
            let c2 = 10;
    
            ob.on('event', () => {c1++});
            ob.on('event', () => {c2--});
            ob.emit('event');
    
            expect(c1).to.be.eq(1);
            expect(c2).to.be.eq(9);
    
            ob.clear('event');
            ob.emit('event');
    
            expect(c1).to.be.eq(1);
            expect(c2).to.be.eq(9);
        });
    });
    
    describe('RendererObservable tests', () => {
        const rob = new RendererObservable();
        
        // Test instance
        it('Should initialize', () => {
            expect(rob).to.be.instanceof(RendererObservable);
        });
    
        // Test on method
        it('Should method "on" works properly', () => {
            const rob2 = new RendererObservable();
            let now = false;
    
            expect(now).to.be.false;
            
            rob2.on('event', () => {now = true});
            rob2.emit('event');
            
            expect(now).to.be.true;
        });
    
        // Test once method
        it('Should method "once" works properly', () => {
            let count = 1;
            
            rob.once('event', () => {count++});
            rob.emit('event');
            
            expect(count).to.be.eq(2);
            
            rob.emit('event');
            
            expect(count).to.be.eq(2);
        });
    
        // Test off method
        it('Should method "off" works properly', () => {
            let count = 15;
            
            let id = rob.on('event', () => {count++});
            rob.emit('event');
    
            expect(count).to.be.eq(16);
    
            rob.off('event', id);
            rob.emit('event');
    
            expect(count).to.be.eq(16);
        });
    
        // Test clear method
        it('Should method "clear" works properly', () => {
            let c1 = 0;
            let c2 = 10;
    
            rob.on('event', () => {c1++});
            rob.on('event', () => {c2--});
            rob.emit('event');
    
            expect(c1).to.be.eq(1);
            expect(c2).to.be.eq(9);
    
            rob.clear('event');
            rob.emit('event');
    
            expect(c1).to.be.eq(1);
            expect(c2).to.be.eq(9);
        });
    });
});
