import RedisConnection from '../../../src/models/redisConnection';

test('KeyFilter constructor works as expected', () => {
    const expectedQuery = 'cacheKey_*';
    const name = "name_2";
    const uris = ["localhost:6379, localhost:6380, localhost:6381"]
    const connection = new RedisConnection(name, uris, null);
    expect(connection.authenticationOptions).toBeNull();
    expect(connection.name).toEqual(name);
    expect(connection.redisServerUris).toEqual(uris);
});