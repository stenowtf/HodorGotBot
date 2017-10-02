const hodorTalk = require('../../src/modules/hodorTalk');

test('get generic response', () => {
    expect(hodorTalk.getGenericResponse()).toContain('...');
});

test('have a nice day response', () => {
    expect(hodorTalk.getHaveANiceDay('Matteo')).toEqual('...');
});

test('odor by hodor response', () => {
    expect(hodorTalk.getOdorByHodor('lol')).toEqual('...');
});
