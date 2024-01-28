import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
    const compressedFile = path.join(__dirname, 'files', 'archive.gz');

    try {
        const readStream = createReadStream(fileToCompress);
        const gzipStream = createGzip();
        const writeStream = createWriteStream(compressedFile);

        await new Promise((resolve, reject) => {
            readStream
                .pipe(gzipStream)
                .pipe(writeStream)
                .on('finish', resolve)
                .on('error', reject);
        });

        console.log('File compressed successfully.');

    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`);
    }
};

await compress();
