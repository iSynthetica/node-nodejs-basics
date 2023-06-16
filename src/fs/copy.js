import fs from 'fs';
import path from 'path';
import { __filename, __dirname } from './helpers.js';

const copy = async () => {
    let sourcePath = path.resolve(__dirname, 'files');
    let distPath = path.resolve(__dirname, 'files_copy');
    let sourcePathStat;

    try {
        [sourcePathStat] = await Promise.all([
            fs.promises.readdir(sourcePath),
            fs.promises.mkdir(distPath),
        ]);
    } catch (err) {
        throw new Error('FS operation failed');
    }

    if (sourcePathStat && sourcePathStat.length) {
        await Promise.all(
            sourcePathStat.map(file =>
                fs.promises.copyFile(path.resolve(sourcePath, file), path.resolve(distPath, file))
            )
        );
    }
};

await copy();
