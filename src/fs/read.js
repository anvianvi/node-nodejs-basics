import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const fileToRead = 'fileToRead.txt';

    try {
        const filePathToRead = path.join(__dirname, 'files', fileToRead);

        if (!fs.existsSync(filePathToRead)) {
            throw new Error('File does not exist');
        }

        const fileContent = fs.readFileSync(filePathToRead, 'utf-8');

        console.log('File Content:');
        console.log(fileContent);

    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`);
    }
};

await read();