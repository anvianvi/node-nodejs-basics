import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const list = async () => {

    try {
        const folderPath = path.join(__dirname, 'files');
        const files = await fs.readdir(folderPath);

        console.log(files)
        await fs.access(folderPath);

    } catch {
        throw new Error(`FS read operation failed!`);
    }
};

await list();
