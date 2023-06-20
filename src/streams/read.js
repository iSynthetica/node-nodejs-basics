import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const read = async () => {
    const readStream = createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'));

    readStream.on('data', chunk => {
        process.stdout.write(chunk.toString());
    });
};

await read();
