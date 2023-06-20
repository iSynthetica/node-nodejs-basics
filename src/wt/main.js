import { Worker, isMainThread } from 'worker_threads';
import { fileURLToPath } from 'url';
import os from 'os';
import path from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    if (isMainThread) {
        let workersNum = os.cpus().length;
        let dataArray = Array.from({ length: workersNum }, (_, i) => i + 10);
        let resultArray = Array.from({ length: workersNum }, (_) => ({status:'pending', result: null}));

        for (let i in dataArray) {
            const worker = new Worker(__dirname + '/worker.js', { workerData: dataArray[i] });

            worker.on('message', message => {
                resultArray[i].status = 'resolved';
                resultArray[i].result = message;
            });

            worker.on('error', () => {
                resultArray[i].status = 'error';
            });

            worker.on('exit', () => {
                workersNum--;

                if (workersNum === 0) {
                    console.log(resultArray);
                }
            });
        }
    } else {

    }
};

await performCalculations();