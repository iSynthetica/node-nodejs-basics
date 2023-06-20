import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const decompress = async () => {
    await pipeline(
        createReadStream(path.join(__dirname, 'files', 'archive.gz')),
        createGunzip(),
        createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'))
    );
};

await decompress();
