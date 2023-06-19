import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const compress = async () => {
    await pipeline(
        createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt')),
        createGzip(),
        createWriteStream(path.join(__dirname, 'files', 'archive.gz'))
    );
};

await compress();
