import fs from 'fs/promises';
import path from 'path';
import { __filename, __dirname } from './helpers.js';

const remove = async () => {
    try {
        await fs.rm(path.resolve(__dirname, 'files', 'fileToRemove.txt'));
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();
