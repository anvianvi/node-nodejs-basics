import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const folderPath = path.join(__dirname, 'files');

    try {
        if (!fs.existsSync(folderPath)) {
            throw new Error('Folder does not exist');
        }

        const files = fs.readdirSync(folderPath);

        console.log('Filenames:');

        files.forEach((file) => {
            console.log(file);
        });

    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`);
    }
};

await list();
