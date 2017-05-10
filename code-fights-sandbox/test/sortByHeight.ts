import { assert } from 'chai';
import { describe, it } from 'mocha';
import * as lambdaLocal from 'lambda-local';
import * as path from 'path';

const envVars = {
    var: `set the variable if needed`,
};

describe('sortByHeight()', () => {
    var tests = [
        {
            input: [-1, 150, 190, 170, -1, -1, 160, 180],
            expected: [-1, 150, 160, 170, -1, -1, 180, 190]
        },
        {
            input: [-1, -1, -1, -1, -1],
            expected: [-1, -1, -1, -1, -1]
        },
        {
            input: [1, 2, 3, 4],
            expected: [1, 2, 3, 4]
        },
        {
            input: [4, 2, 9, 11, 2, 16],
            expected: [2, 2, 4, 9, 11, 16]
        }
    ];

    tests.forEach((test) => {
        it('correctly sorts by height; input: ' + test.input, () => {
            lambdaLocal.execute({
                event: { input: test.input },
                lambdaPath: path.join(__dirname, '../src/sortByHeight/index.js'),
                profilePath: '~/.aws/credentials',
                profileName: 'default',
                timeoutMs: 40000,
                environment: envVars,
                callback: (err, output) => {
                    if (err) {
                        assert.error(err);
                    } else {
                        assert.deepEqual(output, test.expected);
                    }
                },
                mute: true,
            });
        });
    });
});