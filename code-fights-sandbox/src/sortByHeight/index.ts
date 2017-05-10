export const sortByHeight = (a) => {
    const r: any = [];
    var i = a.indexOf(-1);
    while(i!==-1){
        a.splice(i, 1);
        r.push(i+r.length);
        i = a.indexOf(-1);
    }
    a.sort((a, b) => a > b);
    r.every(i => a.splice(i, 0, -1));
    return a;
};

exports.handler = (event, context) => {
    context.done(null, sortByHeight(event.input));
};
