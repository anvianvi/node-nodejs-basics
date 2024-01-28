import { Transform, pipeline } from 'stream';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            const reversed = chunk.toString().split('').reverse().join('');
            callback(null, reversed);
        },
    });

    try {
        await new Promise((resolve, reject) => {
            pipeline(process.stdin, reverse, process.stdout, (error) => {
                if (error) {
                    reject(new Error(`Pipeline failed: ${error.message}`));
                } else {
                    resolve();
                }
            });
        });
    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`);
    }
};

await transform();
