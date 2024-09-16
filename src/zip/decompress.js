import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const compressedFile = path.join(__dirname, 'files', 'archive.gz');
    const decompressedFile = path.join(__dirname, 'files', 'fileToCompress.txt');

    const readStream = createReadStream(compressedFile);
    const unzipStream = createGunzip();
    const writeStream = createWriteStream(decompressedFile);

    await pipeline(readStream, unzipStream, writeStream)

};

await decompress();
