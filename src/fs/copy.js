import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const sourcePath = path.join(__dirname, 'files');
    const destinationPath = path.join(__dirname, 'files_copy');

    try {
        if (!fs.existsSync(sourcePath)) {
            throw new Error('Source folder does not exist');
        }

        if (fs.existsSync(destinationPath)) {
            throw new Error('Destination folder already exists');
        }

        fs.mkdirSync(destinationPath);
        const files = fs.readdirSync(sourcePath);

        for (const file of files) {
            const sourceFile = path.join(sourcePath, file);
            const destinationFile = path.join(destinationPath, file);
            fs.copyFileSync(sourceFile, destinationFile);
        }

        console.log('Folder copied successfully');
    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`);
    }

};

await copy();
