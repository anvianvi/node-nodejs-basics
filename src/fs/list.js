import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const folderPath = path.join(__dirname, 'files');

    try {
        await fs.access(folderPath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error(`FS access operation failed: ${error.message}`);
        }
    }

    try {
        const files = await fs.readdir(folderPath);

        console.log('Filenames:');

        files.forEach((file) => {
            console.log(file);
        });
    } catch (error) {
        throw new Error(`FS read operation failed: ${error.message}`);
    }
};

await list();
