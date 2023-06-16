import fs from 'fs';
import path from 'path';
import { __filename, __dirname } from './helpers.js';

const create = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fresh.txt');

    try {
        await fs.promises.writeFile(filePath, 'I am fresh and young', { flag: 'ax+' });
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await create();