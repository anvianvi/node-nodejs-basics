import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const fileNameToRemove = 'fileToRemove.txt';
    const filePathToRemove = path.join(__dirname, 'files', fileNameToRemove);

    try {
        await fs.access(filePathToRemove);
        throw new Error('File does not exist');
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error(`FS access operation failed: ${error.message}`);
        }
    }

    try {
        await fs.unlink(filePathToRemove);
        console.log('File deleted successfully');
    } catch (error) {
        throw new Error(`FS delete operation failed: ${error.message}`);
    }
};

await remove();
