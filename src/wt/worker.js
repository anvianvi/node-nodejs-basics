import { parentPort } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    try {
        parentPort.on('message', (n) => {
            const result = nthFibonacci(n);
            parentPort.postMessage(result)
        })
    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`);
    }

};

sendResult();
