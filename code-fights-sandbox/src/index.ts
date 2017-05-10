exports.handler = (event, context) => {
    console.log('Env param: ' + process.env.param);
    console.dir(event);

    context.done('bye!');
};
