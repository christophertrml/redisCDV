import KeyFilter from '../../../src/models/keyFilter';

test('KeyFilter constructor works as expected', () => {
    const expectedQuery = 'cacheKey_*';
    const keyFilter = new KeyFilter(expectedQuery);
    expect(keyFilter.query).not.toBeNull();
    expect(keyFilter.query).toBe(expectedQuery);
});