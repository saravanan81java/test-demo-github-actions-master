"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runStepWithLogGroup = void 0;
const ensureChain = (value) => Cypress.isCy(value) ? value : cy.wrap(value, { log: false });
function runStepWithLogGroup(options) {
    Cypress.log({
        name: options.keyword,
        message: options.text == null ? "" : `**${options.text}**`,
        groupStart: true,
    });
    return ensureChain(options.fn()).then((result) => {
        Cypress.log({ groupEnd: true, emitOnly: true });
        return result;
    });
}
exports.runStepWithLogGroup = runStepWithLogGroup;
