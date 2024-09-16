import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';

const read = async () => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

    const readableStream = fs.createReadStream(fileToRead, 'utf-8');

    await pipeline(
        readableStream,
        process.stdout)

};

await read();
