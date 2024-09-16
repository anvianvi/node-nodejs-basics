const parseArgs = () => {
    const args = process.argv.slice(2);

    const result = args
        .filter((_, index) => index % 2 === 0)
        .map((name, index) => `${name.slice(2)} is ${args[index * 2 + 1]}`)
        .join(`, `);

    console.log(result)
};

parseArgs();
