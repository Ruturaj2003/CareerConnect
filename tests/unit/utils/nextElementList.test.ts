import nextElementInList from '../../../src/utils/nextElementInList';

describe('nextElementInList', () => {
  it('locates element on list returns the next element in list', () => {
    const list = ['a', 'b', 'c', 'd'];
    const value = 'c';
    const result = nextElementInList(list, value);
    expect(result).toBe('d');
  });
});
