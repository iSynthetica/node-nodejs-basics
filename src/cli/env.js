// RSS_name1=value1 RSS_name2=value2 node env.js

const parseEnv = () => {
    let env = process.env;
    if (env) {
        for (const key in env) {
            if (key.startsWith('RSS_')) console.log(`${key}=${env[key]}`);
        }
    }
};

parseEnv();