import { Transform } from 'stream';

const transformInput = new Transform({
    transform(chunk, encoding, callback){
        const reversed = chunk.toString().trim().split('').reverse().join('');
        this.push(chunk.toString().trim().split('').reverse().join('') + '\n');
        callback();
    }
});

const transform = async () => {
    process.stdin.pipe(transformInput).pipe(process.stdout);
};

await transform();
