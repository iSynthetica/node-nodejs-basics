import crypto from 'crypto';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const fileBuffer = await fs.readFile(path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    const hash = crypto.createHash('sha256').update(fileBuffer);
    console.log(hash.digest('hex'));
};

await calculateHash();
