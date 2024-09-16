import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
    const compressedFile = path.join(__dirname, 'files', 'archive.gz');

    const readStream = createReadStream(fileToCompress);
    const writeStream = createWriteStream(compressedFile);
    const gzipStream = createGzip();

    await pipeline(readStream, gzipStream, writeStream)
};

await compress();
