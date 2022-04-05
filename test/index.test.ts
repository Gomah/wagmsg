import { messages, wagmsg } from '../src/index';

describe('wagmsg', () => {
  it('Should generate a random message from the messages array', () => {
    const msg = wagmsg();
    expect(messages.includes(msg)).toBe(true)
  });
});
