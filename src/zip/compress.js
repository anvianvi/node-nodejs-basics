
import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
    const compressedFile = path.join(__dirname, 'files', 'archive.gz');

    try {
        const readStream = fs.createReadStream(fileToCompress);
        const gzipStream = zlib.createGzip();
        const writeStream = fs.createWriteStream(compressedFile);

        readStream.pipe(gzipStream).pipe(writeStream);

        await new Promise((resolve, reject) => {
            writeStream.on('finish', resolve);
            writeStream.on('error', reject);
        });

        console.log('File compressed successfully.');

    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`);
    }
};

await compress();
