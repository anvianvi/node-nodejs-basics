import fs from "fs";
import crypto from "crypto";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const calculateHash = async () => {
    try {
        const filePath = path.join(
            __dirname,
            "files",
            "fileToCalculateHashFor.txt"
        );

        const readStream = fs.createReadStream(filePath);
        const hash = crypto.createHash("sha256");

        readStream.pipe(hash).on("finish", () => {
            console.log(`SHA256 hash for file: ${hash.digest("hex")}`);
        });
    } catch (error) {
        console.error(`Error occured while calculating hash: ${error.message}`);
    }
};

await calculateHash();
