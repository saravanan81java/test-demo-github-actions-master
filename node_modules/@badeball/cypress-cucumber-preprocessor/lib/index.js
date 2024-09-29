"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTable = exports.After = exports.Before = exports.attach = exports.defineParameterType = exports.Step = exports.Then = exports.When = exports.Given = exports.defineStep = exports.doesFeatureMatch = exports.isFeature = exports.NOT_FEATURE_ERROR = exports.afterScreenshotHandler = exports.afterSpecHandler = exports.beforeSpecHandler = exports.afterRunHandler = exports.beforeRunHandler = exports.addCucumberPreprocessorPlugin = exports.getStepDefinitionPaths = exports.getStepDefinitionPatterns = exports.resolvePreprocessorConfiguration = void 0;
var preprocessor_configuration_1 = require("./preprocessor-configuration");
Object.defineProperty(exports, "resolvePreprocessorConfiguration", { enumerable: true, get: function () { return preprocessor_configuration_1.resolve; } });
var step_definitions_1 = require("./step-definitions");
Object.defineProperty(exports, "getStepDefinitionPatterns", { enumerable: true, get: function () { return step_definitions_1.getStepDefinitionPatterns; } });
Object.defineProperty(exports, "getStepDefinitionPaths", { enumerable: true, get: function () { return step_definitions_1.getStepDefinitionPaths; } });
var add_cucumber_preprocessor_plugin_1 = require("./add-cucumber-preprocessor-plugin");
Object.defineProperty(exports, "addCucumberPreprocessorPlugin", { enumerable: true, get: function () { return __importDefault(add_cucumber_preprocessor_plugin_1).default; } });
Object.defineProperty(exports, "beforeRunHandler", { enumerable: true, get: function () { return add_cucumber_preprocessor_plugin_1.beforeRunHandler; } });
Object.defineProperty(exports, "afterRunHandler", { enumerable: true, get: function () { return add_cucumber_preprocessor_plugin_1.afterRunHandler; } });
Object.defineProperty(exports, "beforeSpecHandler", { enumerable: true, get: function () { return add_cucumber_preprocessor_plugin_1.beforeSpecHandler; } });
Object.defineProperty(exports, "afterSpecHandler", { enumerable: true, get: function () { return add_cucumber_preprocessor_plugin_1.afterSpecHandler; } });
Object.defineProperty(exports, "afterScreenshotHandler", { enumerable: true, get: function () { return add_cucumber_preprocessor_plugin_1.afterScreenshotHandler; } });
/**
 * Everything below exist merely for the purpose of being nice with TypeScript. All of these methods
 * are exclusively used in the browser and the browser field in package.json points to ./methods.ts.
 */
function createUnimplemented() {
    return new Error("Cucumber methods aren't available in a node environment");
}
var methods_1 = require("./methods");
Object.defineProperty(exports, "NOT_FEATURE_ERROR", { enumerable: true, get: function () { return methods_1.NOT_FEATURE_ERROR; } });
function isFeature() {
    throw createUnimplemented();
}
exports.isFeature = isFeature;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doesFeatureMatch(expression) {
    throw createUnimplemented();
}
exports.doesFeatureMatch = doesFeatureMatch;
function defineStep(
// eslint-disable-next-line @typescript-eslint/no-unused-vars
description, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
implementation) {
    throw createUnimplemented();
}
exports.defineStep = defineStep;
exports.Given = defineStep;
exports.When = defineStep;
exports.Then = defineStep;
function Step(
// eslint-disable-next-line @typescript-eslint/no-unused-vars
world, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
text, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
argument) {
    throw createUnimplemented();
}
exports.Step = Step;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function defineParameterType(options) {
    throw createUnimplemented();
}
exports.defineParameterType = defineParameterType;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function attach(data, mediaType) {
    throw createUnimplemented();
}
exports.attach = attach;
function Before(
// eslint-disable-next-line @typescript-eslint/no-unused-vars
optionsOrFn, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
maybeFn) {
    throw createUnimplemented();
}
exports.Before = Before;
function After(
// eslint-disable-next-line @typescript-eslint/no-unused-vars
optionsOrFn, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
maybeFn) {
    throw createUnimplemented();
}
exports.After = After;
var data_table_1 = require("./data_table");
Object.defineProperty(exports, "DataTable", { enumerable: true, get: function () { return __importDefault(data_table_1).default; } });
