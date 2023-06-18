import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const write = async () => {
    const writeStream = createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'));

    process.stdin.on('data', data => {
        writeStream.write(data.toString().trim() + '\n');
    });
};

await write();
