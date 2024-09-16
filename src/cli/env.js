const parseEnv = () => {
    const filteredEnv = Object.keys(process.env)
        .filter((key) => key.startsWith("RSS_"))
        .map((key) => `${key}=${process.env[key]}`)
        .join("; ");

    console.log(filteredEnv);
};

parseEnv();
