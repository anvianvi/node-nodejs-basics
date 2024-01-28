import fs from 'fs/promises';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {

    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    try {
        const fileContent = await fs.readFile(filePath);
        const hash = crypto.createHash('sha256');
        hash.update(fileContent);
        const hashHex = hash.digest('hex');
        console.log(`SHA256 hash for file: ${filePath}`);
        console.log(hashHex);
    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`);
    }
};

await calculateHash();