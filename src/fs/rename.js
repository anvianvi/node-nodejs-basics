
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const currentFileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';

    try {
        const currentFilePath = path.join(__dirname, 'files', currentFileName);
        const newFilePath = path.join(__dirname, 'files', newFileName);

        if (!fs.existsSync(currentFilePath)) {
            throw new Error('Source file does not exist');
        }

        if (fs.existsSync(newFilePath)) {
            throw new Error('Destination file already exists');
        }

        fs.renameSync(currentFilePath, newFilePath);
        console.log('File renamed successfully');
    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`);
    }
};

await rename();
