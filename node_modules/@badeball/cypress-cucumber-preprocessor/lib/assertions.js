"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertIsString = exports.assertAndReturn = exports.assert = exports.fail = exports.createError = void 0;
const type_guards_1 = require("./type-guards");
const package_json_1 = require("../package.json");
function createError(message) {
    return new Error(`${message} (this might be a bug, please report at ${package_json_1.homepage})`);
}
exports.createError = createError;
function fail(message) {
    throw createError(message);
}
exports.fail = fail;
function assert(value, message) {
    if (value != null) {
        return;
    }
    fail(message);
}
exports.assert = assert;
function assertAndReturn(value, message) {
    assert(value, message);
    return value;
}
exports.assertAndReturn = assertAndReturn;
function assertIsString(value, message) {
    assert((0, type_guards_1.isString)(value), message);
}
exports.assertIsString = assertIsString;
