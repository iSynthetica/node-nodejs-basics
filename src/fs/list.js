import fs from 'fs/promises';
import path from 'path';
import { __filename, __dirname } from './helpers.js';

const list = async () => {
    try {
        const fileList = await fs.readdir(path.resolve(__dirname, 'files'));

        if (fileList && fileList.length) {
            for (let fileName of fileList) console.log(fileName);
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();
