"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStepDefinitionPatternsPre10 = exports.getStepDefinitionPatternsPost10 = exports.getStepDefinitionPatterns = exports.pathParts = exports.getStepDefinitionPaths = void 0;
const path_1 = __importDefault(require("path"));
const glob_1 = __importDefault(require("glob"));
const util_1 = __importDefault(require("util"));
const assert_1 = __importDefault(require("assert"));
const is_path_inside_1 = __importDefault(require("is-path-inside"));
const debug_1 = __importDefault(require("./debug"));
const paths_1 = require("./helpers/paths");
async function getStepDefinitionPaths(stepDefinitionPatterns) {
    return (await Promise.all(stepDefinitionPatterns.map((pattern) => glob_1.default.glob(pattern, { nodir: true, windowsPathsNoEscape: true })))).reduce((acum, el) => acum.concat(el), []);
}
exports.getStepDefinitionPaths = getStepDefinitionPaths;
function trimFeatureExtension(filepath) {
    return filepath.replace(/\.feature$/, "");
}
function pathParts(relativePath) {
    (0, assert_1.default)(!path_1.default.isAbsolute(relativePath), `Expected a relative path but got ${relativePath}`);
    const parts = [];
    do {
        parts.push(relativePath);
    } while ((relativePath = path_1.default.normalize(path_1.default.join(relativePath, ".."))) !== ".");
    return parts;
}
exports.pathParts = pathParts;
function getStepDefinitionPatterns(configuration, filepath) {
    const { cypress, preprocessor } = configuration;
    if ("specPattern" in cypress) {
        return getStepDefinitionPatternsPost10({ cypress, preprocessor }, filepath);
    }
    else {
        return getStepDefinitionPatternsPre10({ cypress, preprocessor }, filepath);
    }
}
exports.getStepDefinitionPatterns = getStepDefinitionPatterns;
function getStepDefinitionPatternsPost10(configuration, filepath) {
    const projectRoot = configuration.cypress.projectRoot;
    if (!(0, is_path_inside_1.default)(filepath, projectRoot)) {
        throw new Error(`${filepath} is not inside ${projectRoot}`);
    }
    const filepathReplacement = glob_1.default.escape(trimFeatureExtension(path_1.default.relative(configuration.preprocessor.implicitIntegrationFolder, filepath)), { windowsPathsNoEscape: true });
    (0, debug_1.default)(`replacing [filepath] with ${util_1.default.inspect(filepathReplacement)}`);
    const parts = pathParts(filepathReplacement);
    (0, debug_1.default)(`replacing [filepart] with ${util_1.default.inspect(parts)}`);
    const stepDefinitions = [configuration.preprocessor.stepDefinitions].flat();
    return stepDefinitions
        .flatMap((pattern) => {
        if (pattern.includes("[filepath]") && pattern.includes("[filepart]")) {
            throw new Error(`Pattern cannot contain both [filepath] and [filepart], but got ${util_1.default.inspect(pattern)}`);
        }
        else if (pattern.includes("[filepath]")) {
            return pattern.replace("[filepath]", filepathReplacement);
        }
        else if (pattern.includes("[filepart]")) {
            return [
                ...parts.map((part) => pattern.replace("[filepart]", part)),
                path_1.default.normalize(pattern.replace("[filepart]", ".")),
            ];
        }
        else {
            return pattern;
        }
    })
        .map((pattern) => (0, paths_1.ensureIsAbsolute)(projectRoot, pattern));
}
exports.getStepDefinitionPatternsPost10 = getStepDefinitionPatternsPost10;
function getStepDefinitionPatternsPre10(configuration, filepath) {
    const fullIntegrationFolder = (0, paths_1.ensureIsAbsolute)(configuration.cypress.projectRoot, configuration.cypress.integrationFolder);
    if (!(0, is_path_inside_1.default)(filepath, fullIntegrationFolder)) {
        throw new Error(`${filepath} is not inside ${fullIntegrationFolder}`);
    }
    const filepathReplacement = glob_1.default.escape(trimFeatureExtension(path_1.default.relative(fullIntegrationFolder, filepath)), { windowsPathsNoEscape: true });
    (0, debug_1.default)(`replacing [filepath] with ${util_1.default.inspect(filepathReplacement)}`);
    const parts = pathParts(filepathReplacement);
    (0, debug_1.default)(`replacing [filepart] with ${util_1.default.inspect(parts)}`);
    const stepDefinitions = [configuration.preprocessor.stepDefinitions].flat();
    return stepDefinitions
        .flatMap((pattern) => {
        if (pattern.includes("[filepath]") && pattern.includes("[filepart]")) {
            throw new Error(`Pattern cannot contain both [filepath] and [filepart], but got ${util_1.default.inspect(pattern)}`);
        }
        else if (pattern.includes("[filepath]")) {
            return pattern.replace("[filepath]", filepathReplacement);
        }
        else if (pattern.includes("[filepart]")) {
            return [
                ...parts.map((part) => pattern.replace("[filepart]", part)),
                path_1.default.normalize(pattern.replace("[filepart]", ".")),
            ];
        }
        else {
            return pattern;
        }
    })
        .map((pattern) => (0, paths_1.ensureIsAbsolute)(configuration.cypress.projectRoot, pattern));
}
exports.getStepDefinitionPatternsPre10 = getStepDefinitionPatternsPre10;
