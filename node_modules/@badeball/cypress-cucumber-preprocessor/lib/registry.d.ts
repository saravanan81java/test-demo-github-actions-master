/// <reference types="cypress" />
import { Expression, ParameterTypeRegistry } from "@cucumber/cucumber-expressions";
import parse from "@cucumber/tag-expressions";
import DataTable from "./data_table";
import { CypressCucumberError } from "./error";
import { IHookBody, IParameterTypeDefinition, IStepDefinitionBody } from "./types";
import { Position } from "./source-map";
export interface IStepDefinition<T extends unknown[], C extends Mocha.Context> {
    expression: Expression;
    implementation: IStepDefinitionBody<T, C>;
    position?: Position;
}
export declare class MissingDefinitionError extends CypressCucumberError {
}
export declare class MultipleDefinitionsError extends CypressCucumberError {
}
export type HookKeyword = "Before" | "After";
export interface IHook {
    id: string;
    node: ReturnType<typeof parse>;
    implementation: IHookBody;
    keyword: HookKeyword;
    position?: Position;
}
export declare class Registry {
    private experimentalSourceMap;
    parameterTypeRegistry: ParameterTypeRegistry;
    private preliminaryStepDefinitions;
    stepDefinitions: IStepDefinition<unknown[], Mocha.Context>[];
    beforeHooks: IHook[];
    afterHooks: IHook[];
    constructor(experimentalSourceMap: boolean);
    finalize(): void;
    defineStep(description: string | RegExp, implementation: () => void): void;
    defineParameterType<T, C extends Mocha.Context>({ name, regexp, transformer, }: IParameterTypeDefinition<T, C>): void;
    defineBefore(options: {
        tags?: string;
    }, fn: IHookBody): void;
    defineAfter(options: {
        tags?: string;
    }, fn: IHookBody): void;
    getMatchingStepDefinitions(text: string): IStepDefinition<unknown[], Mocha.Context>[];
    resolveStepDefintion(text: string): IStepDefinition<unknown[], Mocha.Context>;
    runStepDefininition(world: Mocha.Context, text: string, argument?: DataTable | string): unknown;
    resolveBeforeHooks(tags: string[]): IHook[];
    resolveAfterHooks(tags: string[]): IHook[];
    runHook(world: Mocha.Context, hook: IHook): void;
}
declare global {
    namespace globalThis {
        var __cypress_cucumber_preprocessor_registry_dont_use_this: Registry | undefined;
    }
}
export declare function withRegistry(experimentalSourceMap: boolean, fn: () => void): Registry;
export declare function assignRegistry(registry: Registry): void;
export declare function freeRegistry(): void;
export declare function getRegistry(): Registry;
