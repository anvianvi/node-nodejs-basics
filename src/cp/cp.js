import { fork } from 'node:child_process'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scriptPath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const childProcess = fork(scriptPath, args, { stdio: 'inherit' });

    childProcess.on('close', (code) => {
        console.log(`Child process exited with code ${code}`)
    })

};

spawnChildProcess(['firstTestArg', 'secondTestArg', 1, 2, '2']);