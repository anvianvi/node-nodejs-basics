import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


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
