import {FakeUUIDGenerator} from './FakeUUIDGenerator';

const fake = new FakeUUIDGenerator();

describe('FakeUUIDGenerator', () => {
  it('est ce que cette fonction renvoie quelque chose ?', () => {
    expect(fake).not.toBeUndefined();
  });
  it('est ce que cette fonction renvoi un string ?', () => {
    expect(fake).toBe(String);
  });
});