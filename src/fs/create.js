import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fresh.txt');

    try {
        await fs.access(pathToFile);
        throw new Error('File already exists');
    } catch (error) {
        if (error.code === 'ENOENT') {
            try {
                await fs.writeFile(pathToFile, 'I am fresh and young');
                console.log('File created successfully');
            } catch (writeError) {
                throw new Error(`FS write operation failed: ${writeError.message}`);
            }
        } else {
            throw new Error(`FS access operation failed: ${error.message}`);
        }
    }
};

await create();