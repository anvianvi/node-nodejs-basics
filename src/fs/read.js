import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const fileToRead = 'fileToRead.txt';
    const filePathToRead = path.join(__dirname, 'files', fileToRead);

    try {
        await fs.access(filePathToRead);
        throw new Error('File does not exist');
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error(`FS access operation failed: ${error.message}`);
        }
    }

    try {
        const fileContent = await fs.readFile(filePathToRead, 'utf-8');
        console.log('File Content:');
        console.log(fileContent);
    } catch (error) {
        throw new Error(`FS read operation failed: ${error.message}`);
    }
};

await read();
