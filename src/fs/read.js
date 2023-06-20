import fs from 'fs/promises';
import path from 'path';
import { __filename, __dirname } from './helpers.js';

const read = async () => {
    try {
        let fileContent = (await fs.readFile(path.resolve(__dirname, 'files', 'fileToRead.txt'))).toString('utf-8');

        console.log(fileContent);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();
