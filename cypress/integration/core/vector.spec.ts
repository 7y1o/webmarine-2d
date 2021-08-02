/// <reference types="cypress" />

import { Vector1 } from "../../../src/core/vector/Vector1";
import { Vector2 } from "../../../src/core/vector/Vector2";

describe('Vector tests', () => {
    
    // Vector1 class
    describe('Vector1 tests', () => {
        const vec = new Vector1(0);

        // Test constructor
        it('Should initialize', () => {
            expect(vec).to.be.instanceof(Vector1);
            expect(vec.value[0]).to.be.eq(0);
        });

        // Test add
        it('Should "add" method works properly', () => {
            vec.add(new Vector1(1));
            expect(vec.value[0]).to.be.eq(1);
        });

        // Test subtract
        it('Should "sub" method works properly', () => {
            vec.sub(new Vector1(1));
            expect(vec.value[0]).to.be.eq(0);
        });

        // Test multiply
        it('Should "multiply" method works properly', () => {
            vec.add(new Vector1(1));
            vec.multiply(new Vector1(4));
            expect(vec.value[0]).to.be.eq(4);
        });

        // Test divide
        it('Should "divide" method works properly', () => {
            vec.divide(new Vector1(2));
            expect(vec.value[0]).to.be.eq(2);
        });

        // Test set
        it('Should "set" method works properly', () => {
            vec.set(new Vector1(1));
            expect(vec.value[0]).to.be.eq(1);
        });

        // Test clear
        it('Should "clear" method works properly', () => {
            vec.clear();
            expect(vec.value[0]).to.be.eq(0);
        });
    });

    // Vector2 class
    describe('Vector2 tests', () => {
        const vec = new Vector2(0, 1);

        // Test constructor
        it('Should initialize', () => {
            expect(vec).to.be.instanceof(Vector2);
            expect(vec.value[0]).to.be.eq(0);
            expect(vec.value[1]).to.be.eq(1);
        });

        // Test add
        it('Should "add" method works properly', () => {
            vec.add(new Vector2(1, 1));
            expect(vec.value[0]).to.be.eq(1);
            expect(vec.value[1]).to.be.eq(2);
        });

        // Test subtract
        it('Should "sub" method works properly', () => {
            vec.sub(new Vector2(1, 2));
            expect(vec.value[0]).to.be.eq(0);
            expect(vec.value[1]).to.be.eq(0);
        });

        // Test multiply
        it('Should "multiply" method works properly', () => {
            vec.add(new Vector2(1, 2));
            vec.multiply(new Vector2(4, 2));
            expect(vec.value[0]).to.be.eq(4);
            expect(vec.value[1]).to.be.eq(4);
        });

        // Test divide
        it('Should "divide" method works properly', () => {
            vec.divide(new Vector2(1, 2));
            expect(vec.value[0]).to.be.eq(4);
            expect(vec.value[1]).to.be.eq(2);
        });

        // Test set
        it('Should "set" method works properly', () => {
            vec.set(new Vector2(1, 1));
            expect(vec.value[0]).to.be.eq(1);
            expect(vec.value[1]).to.be.eq(1);
        });

        // Test clear
        it('Should "clear" method works properly', () => {
            vec.clear();
            expect(vec.value[0]).to.be.eq(0);
            expect(vec.value[1]).to.be.eq(0);
        });
    });
});