import fs from 'fs/promises';
import path from 'path';
import { __dirname } from '../helpers';

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
