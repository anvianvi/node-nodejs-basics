import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const currentFileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';
    const currentFilePath = path.join(__dirname, 'files', currentFileName);
    const newFilePath = path.join(__dirname, 'files', newFileName);

    try {
        await fs.access(currentFilePath);
        throw new Error('Source file does not exist');
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error(`FS access operation failed: ${error.message}`);
        }
    }

    try {
        await fs.access(newFilePath);
        throw new Error('Destination file already exists');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.rename(currentFilePath, newFilePath);
            console.log('File renamed successfully');
        } else {
            throw new Error(`FS access operation failed: ${error.message}`);
        }
    }
};

await rename();
