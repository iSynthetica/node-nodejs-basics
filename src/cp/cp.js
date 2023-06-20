import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const runChild = spawn('node', [path.join(__dirname, 'files', 'script.js'), ...args], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'], // Establish IPC channel
    });

    process.stdin.pipe(runChild.stdin);
    runChild.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
