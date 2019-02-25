import RedisService from '../../../src/services/redisService';
import RedisConnection from '../../../src/models/redisConnection';
import KeyFilter from '../models/keyFilter';
import Redis from 'ioredis';

test('RedisService can get all keys from redis', async done => {
    const redisUri = process.env['TEST_REDIS_URI_1'];
    const redis = new Redis()
    redis.set('foo', 'bar');
    redis.get('foo', function (err, result) {
        console.log(result);
        done();
    });
    
    const service = new RedisService();
    const connection = new RedisConnection("test", [redisUri]);
    const results = service.getKeys(new KeyFilter("fo*"), connection);
    expect(results).toEqual([]);
});