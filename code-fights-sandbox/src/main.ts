import * as lambdaLocal from 'lambda-local';
import * as path from 'path';

const jsonPayload = {
    param: 'value',
};

const event = {
    input: [1, 5, 4, 5, 1],
};

lambdaLocal.execute({
    event,
    lambdaPath: path.join(__dirname, 'index.js'),
    profilePath: '~/.aws/credentials',
    profileName: 'default',
    timeoutMs: 40000,
    environment: jsonPayload,
    callback: (err, data) => {
        if (err) {
            console.error(err);
        } else {
            console.log(data);
        }
    },
});
