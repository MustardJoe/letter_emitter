const LetterEmitter = require('./letterEmitter');

describe('test for our letter emmiter', () => {
  let letterEmitter;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });

  it('emits an event for each letter in a string', done => {
    const callback = jest.fn();
    letterEmitter.on('letter', callback);

    const firedEvents = [];

    letterEmitter.on('end', () => {
      'here is pizza'.split('').forEach((letter, offset) => {
        expect(callback).toHaveBeenCalledWith({
          letter,
          offset
        });
        firedEvents.push()
      });
      done();
    });

    letterEmitter.read('here is pizza');
  });
});
