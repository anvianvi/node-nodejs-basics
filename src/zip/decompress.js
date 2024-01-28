import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const compressedFile = path.join(__dirname, 'files', 'archive.gz');
    const decompressedFile = path.join(__dirname, 'files', 'fileToCompress.txt');

    try {
        const readStream = fs.createReadStream(compressedFile);
        const unzipStream = zlib.createGunzip();
        const writeStream = fs.createWriteStream(decompressedFile);

        readStream.pipe(unzipStream).pipe(writeStream);

        await new Promise((resolve, reject) => {
            writeStream.on('finish', resolve);
            writeStream.on('error', reject);
        });

        console.log('File decompressed successfully.');

    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`);
    }
};

await decompress();
