import fs from 'fs/promises';
import path from 'path';
import { __dirname } from '../helpers';

const create = async () => {

    const pathToFile = path.join(__dirname, 'files', 'fresh.txt');

    try {
        await fs.writeFile(pathToFile, 'I am fresh and young', { flag: 'wx' });
    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`);
    }
};

await create();