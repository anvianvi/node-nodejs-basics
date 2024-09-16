import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const remove = async () => {
    try {
        const fileNameToRemove = 'fileToRemove.txt';
        const filePathToRemove = path.join(__dirname, 'files', fileNameToRemove);

        await fs.rm(filePathToRemove);

    } catch {
        throw new Error(`FS operation failed!`);

    }
};

await remove();
