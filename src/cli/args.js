const parseArgs = () => {
    let args = process.argv;
    let argName = '';

    if (args && args.length) {
        for (const arg of args) {
            if (arg.startsWith('--')) {
                if (argName && argName !== '') {
                    console.log(`${argName.replace('--', '')} is`);
                }
                argName = arg;
            } else if (argName && argName !== '') {
                console.log(`${argName.replace('--', '')} is ${arg}`);
                argName = '';
            }
        }
    }
};

parseArgs();
