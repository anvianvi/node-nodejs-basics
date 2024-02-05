import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const rename = async () => {

    try {
        const wrongFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
        const properFilePath = path.join(__dirname, 'files', 'properFilename.md');

        await fs.rename(wrongFilePath, properFilePath);
    } catch (error) {
        throw new Error(`FS access operation failed: ${error.message}`);
    }
};

await rename();
