import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const create = async () => {
    const filePath = path.resolve(path.dirname(__filename), 'files', 'fresh.txt');

    try {
        await fs.promises.writeFile(filePath, 'I am fresh and young', { flag: 'ax+' });
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await create();