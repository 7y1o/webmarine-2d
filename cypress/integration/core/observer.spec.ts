/// <reference types="cypress" />

import { Observable } from "../../../src/core/observer/Observable";

describe('Observer tests', () => {
    it('Should initialize', () => {
        expect(new Observable()).to.be.instanceof(Observable);
    });
});