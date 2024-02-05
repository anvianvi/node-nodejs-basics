import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt');

    try {
        const writeStream = fs.createWriteStream(fileToWrite, { flags: 'a' });

        process.stdin.on('data', (data) => {
            writeStream.write(data);
        });

        process.stdin.on('end', () => {
            writeStream.end();
            console.log('File writing completed.');
        });

        process.stdin.on('error', (error) => {
            throw new Error(`Input stream error: ${error.message}`);
        });

        writeStream.on('error', (error) => {
            throw new Error(`Write stream error: ${error.message}`);
        });

    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`);
    }
};

await write();
