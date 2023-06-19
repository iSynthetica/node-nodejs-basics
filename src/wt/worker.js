import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

// n should be received from main thread
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = result => {
    parentPort.postMessage(result);
};

if (isMainThread) {
    const worker = new Worker(__filename, { workerData: 10 });
    worker.on('message', (message) => {
        console.log('nthFibonacci result:', message);
    })
} else {
    sendResult(nthFibonacci(workerData));
}
