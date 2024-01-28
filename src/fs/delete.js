import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const fileNameToRemove = 'fileToRemove.txt';

    try {
        const filePathToRemove = path.join(__dirname, 'files', fileNameToRemove);

        if (!fs.existsSync(filePathToRemove)) {
            throw new Error('File does not exist');
        }

        fs.unlinkSync(filePathToRemove);
        console.log('File deleted successfully');
    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`);
    }
};

await remove();
