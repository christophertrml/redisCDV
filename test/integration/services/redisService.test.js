import RedisService from '../../../src/services/redisService';
import RedisConnection from '../../../src/models/redisConnection';
import KeyFilter from '../../../src/models/keyFilter';
import Redis from 'ioredis';

test('RedisService can get all keys from redis', async done => {
    const redisUri = process.env['TEST_REDIS_URI_1'];
    const redis = new Redis();
    // Create 20 keys that match and 80 that don't
    let keysToFind = [];
    
    for (let i = 0; i < 20; i++) {
        redis.set('fo_' + i, true);
        keysToFind.push('fo_' + i);

        redis.set('fa_' + i, true);
        redis.set('fi_' + i, true);
        redis.set('fp_' + i, true);
        redis.set('fu_' + i, true);
    }
    
    const service = new RedisService();
    const connection = new RedisConnection("test", [redisUri]);
    const results = await service.getKeys(new KeyFilter("fo_*"), connection);
    expect(results).toEqual(keysToFind);
    done();
});