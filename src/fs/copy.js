import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const copy = async () => {
    try {
        const sourcePath = path.join(__dirname, 'files');
        const destinationPath = path.join(__dirname, 'files_copy');
        const files = await fs.readdir(sourcePath);

        await fs.mkdir(destinationPath)

        files.forEach(async (file) => {
            const sourceFile = path.join(sourcePath, file);
            const destinationFile = path.join(destinationPath, file);
            await fs.copyFile(sourceFile, destinationFile);
        })
    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`);
    }
};

await copy();
