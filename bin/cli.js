#!/usr/bin/env node

import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';
import fetch, { Headers, Request, Response } from 'node-fetch';

// Add fetch API as global for Node.js 16 compatibility
globalThis.fetch = fetch;
globalThis.Headers = Headers;
globalThis.Request = Request;
globalThis.Response = Response;

const __dirname = dirname(fileURLToPath(import.meta.url));
const mainModulePath = join(__dirname, "..", "dist", 'index.js');

import(pathToFileURL(mainModulePath).href);
