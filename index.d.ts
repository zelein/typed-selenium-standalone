import { SpawnOptions, ChildProcess } from 'child_process';

export interface InstallOptions {
    version?: string;
    baseURL?: string;
    basePath?: string;
    drivers?: Driver;
    proxy?: string;
    logger?: (message: string) => void;
    progressCb?: (totalLength: number, progressLength: number, chunkLength: number) => void;
}

export interface StartOptions {
    version?: string;
    drivers?: Driver;
    basePath?: string;
    spawnOptions?: SpawnOptions;
    seleniumArgs?: string[];
    spawnCb?: (selenium: ChildProcess) => void;
    javaPath?: string;
}

export interface Driver {
    [index: string]: WebDriver;
}

export interface WebDriver {
    version: string;
    arch: string;
    baseURL: string;
}

export function install(cb: (err: Error) => void);
export function install(opts: InstallOptions, cb: (err: Error) => void);

export function start(cb: (err: Error, child: ChildProcess) => void);
export function start(opts: StartOptions, cb: (err: Error, child: ChildProcess) => void);
