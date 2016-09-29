import test = require('blue-tape');
import {ChildProcess} from 'child_process';

import seleniumStandalone = require('selenium-standalone');

const defaultConfig: seleniumStandalone.InstallOptions = {
  baseURL: 'https://selenium-release.storage.googleapis.com',
  version: '2.53.1',
  drivers: {
    chrome: {
      version: '2.24',
      arch: process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com'
    },
    ie: {
      version: '2.53.1',
      arch: process.arch,
      baseURL: 'https://selenium-release.storage.googleapis.com'
    },
    firefox: {
      version: '0.10.0',
      arch: process.arch,
      baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
    }
  }
};

const baseStartConfig: seleniumStandalone.StartOptions = {
    version: '2.53.1',
    drivers: {
        chrome: {
        version: '2.24',
        arch: process.arch,
        baseURL: 'https://chromedriver.storage.googleapis.com'
        },
        ie: {
        version: '2.53.1',
        arch: process.arch,
        baseURL: 'https://selenium-release.storage.googleapis.com'
        },
        firefox: {
        version: '0.10.0',
        arch: process.arch,
        baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
        }
    }
};

test('install with no params', (t) => {
    seleniumStandalone.install((err: Error): void => {
        t.equal(err, null);
        t.end();
    });
});

test('install with params', (t) => {
    seleniumStandalone.install(defaultConfig, (err: Error): void => {
        t.equal(err, null);
        t.end();
    });
});

test('start with params', (t) => {
    seleniumStandalone.start(baseStartConfig, (err: Error, child: ChildProcess): void => {
        t.equal(err, null);
        child.kill();
        t.end();
    });
});

test('start with no params', (t) => {
    seleniumStandalone.start((err: Error, child: ChildProcess): void => {
        t.equal(err, null);
        child.kill();
        t.end();
    });
});
