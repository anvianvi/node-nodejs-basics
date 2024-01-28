import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    const numOfCores = os.cpus().length;
    const workers = [];
    let startNumber = 10;
    const results = [];

    try {
        const workerPromises = Array.from({ length: numOfCores }, (_, i) => {
            return new Promise((resolve) => {
                const worker = new Worker(new URL('./worker.js', import.meta.url));

                worker.postMessage(startNumber);
                startNumber++;

                worker.on('message', (result) => {
                    results[i] = { status: 'resolved', data: result };
                    resolve();
                });

                worker.on('error', () => {
                    results[i] = { status: 'error', data: null };
                    resolve();
                });

                workers.push(worker);
            });
        });

        await Promise.all(workerPromises);
    } catch (error) {
        console.error(`Main operation failed: ${error.message}`);
    } finally {
        await Promise.all(workers.map((worker) => worker.terminate()));
        console.log(results);
    }
};

await performCalculations();
