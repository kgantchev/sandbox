import * as fs from 'fs';

exports.handler = (event, context, callback) => {
    console.log('Env param: ' + process.env.param);
    console.dir(event);
    callback(null, 'ready to exit...');
    fs.writeFileSync('cpuType.json', JSON.stringify(process.env), 'utf8');

    context.done('bye!');
};
