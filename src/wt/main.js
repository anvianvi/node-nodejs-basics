
import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    const numOfCores = os.cpus().length;
    const workers = [];
    let startNumber = 10;
    const results = [];

    for (let i = 0; i < numOfCores; i++) {
        const workerPromise = new Promise((resolve) => {
            const worker = new Worker(new URL('./worker.js', import.meta.url));

            worker.postMessage(startNumber);
            startNumber++;

            worker.on('message', (result) => {
                results[i] = { status: 'resolved', data: result };
                resolve();
            });

            worker.on('error', (error) => {
                results[i] = { status: 'error', data: null };
                resolve();
            });

            workers.push(worker);
        });

        await workerPromise;
    }

    await Promise.all(workers.map((worker) => worker.terminate()));

    console.log(results);
};

await performCalculations();
