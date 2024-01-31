import fs from 'fs/promises';
import path from 'path';
import { __dirname } from '../helpers';

const rename = async () => {

    try {
        const wrongFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
        const properFilePath = path.join(__dirname, 'files', 'properFilename.md');

        await fs.rename(wrongFilePath, properFilePath);
    } catch (error) {
        throw new Error(`FS access operation failed: ${error.message}`);
    }
};

await rename();
