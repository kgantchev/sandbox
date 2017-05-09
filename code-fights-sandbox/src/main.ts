// import * as lambdaLocal from 'lambda-local';
// import * as path from 'path';

// const jsonPayload = {
//     param: 'value',
// };

// lambdaLocal.execute({
//     event: {
//         testVal1: [1,5,4,5,1],
//         testVal2: 'two',
//     },
//     lambdaPath: path.join(__dirname, 'index.js'),
//     profilePath: '~/.aws/credentials',
//     profileName: 'default',
//     timeoutMs: 40000,
//     environment: jsonPayload,
//     callback: (err, data) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log(data);
//         }
//     },
// });

const main = () => {
    console.log('hello world');
}
main();