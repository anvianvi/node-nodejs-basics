import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const compressedFile = path.join(__dirname, 'files', 'archive.gz');
    const decompressedFile = path.join(__dirname, 'files', 'fileToCompress.txt');

    try {
        const readStream = createReadStream(compressedFile);
        const unzipStream = createGunzip();
        const writeStream = createWriteStream(decompressedFile);

        await new Promise((resolve, reject) => {
            writeStream
                .on('finish', resolve)
                .on('error', reject);

            readStream.pipe(unzipStream).pipe(writeStream);
        });

        console.log('File decompressed successfully.');

    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`);
    }
};

await decompress();
