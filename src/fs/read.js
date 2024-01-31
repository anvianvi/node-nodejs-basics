import fs from 'fs/promises';
import path from 'path';
import { __dirname } from '../helpers';

const read = async () => {
    const fileToRead = 'fileToRead.txt';
    const filePathToRead = path.join(__dirname, 'files', fileToRead);

    try {
        const fileContent = await fs.readFile(filePathToRead, 'utf-8');
        console.log('File Content:');
        console.log(fileContent);
    } catch {
        throw new Error(`FS read operation failed!`);
    }
};

await read();
