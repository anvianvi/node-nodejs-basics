const parseArgs = () => {
    const inputedArgsArray = process.argv.slice(2);
    const parsedArgsArray = {};

    for (let i = 0; i < inputedArgsArray.length; i += 2) {
        const propName = inputedArgsArray[i].slice(2);
        const propValue = inputedArgsArray[i + 1];
        parsedArgsArray[propName] = propValue;
    }

    Object.entries(parsedArgsArray).forEach(([propName, propValue]) => {
        console.log(`${propName} is ${propValue}`);
    });
};

parseArgs();
