import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const sourcePath = path.join(__dirname, 'files');
    const destinationPath = path.join(__dirname, 'files_copy');

    try {
        await fs.access(sourcePath);
        throw new Error('Source folder does not exist');
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error(`FS access operation failed: ${error.message}`);
        }
    }

    try {
        await fs.access(destinationPath);
        throw new Error('Destination folder already exists');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.mkdir(destinationPath);
        } else {
            throw new Error(`FS access operation failed: ${error.message}`);
        }
    }
    try {
        const files = await fs.readdir(sourcePath);

        for (const file of files) {
            const sourceFile = path.join(sourcePath, file);
            const destinationFile = path.join(destinationPath, file);
            await fs.copyFile(sourceFile, destinationFile);
        }

        console.log('Folder copied successfully');
    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`);
    }
};

await copy();
