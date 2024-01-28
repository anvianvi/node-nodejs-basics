const parseEnv = () => {
    const rssEnvVars = Object.fromEntries(
        Object.entries(process.env)
            .filter(([key]) => key.startsWith("RSS_"))
    );

    const outputLine = Object.entries(rssEnvVars)
        .map(([key, value]) => `${key}=${value}`)
        .join("; ");

    console.log(outputLine);
};

parseEnv();
