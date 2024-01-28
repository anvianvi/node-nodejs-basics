import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        const readableStream = fs.createReadStream(fileToRead, 'utf-8');

        readableStream.on('data', (chunk) => {
            process.stdout.write(chunk);
        });

        await new Promise((resolve) => {
            readableStream.on('end', resolve);
        });

        console.log('\nFile reading completed.');

    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`);
    }
};

await read();

