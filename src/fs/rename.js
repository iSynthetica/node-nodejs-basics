import fs from 'fs';
import path from 'path';
import { __filename, __dirname } from './helpers.js';

const rename = async () => {
    try {
        await fs.promises.rename(
            path.resolve(__dirname, 'files', 'wrongFilename.txt'),
            path.resolve(__dirname, 'files', 'properFilename.md')
        );
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();
