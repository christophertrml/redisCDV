import Redis from 'ioredis';
export default class RedisService {
    async getKeys(keyFilter, redisConnection) {
        console.log(redisConnection.redisServerUris);
        const cluster = new Redis.Cluster(redisConnection.redisServerUris);
        const nodes = cluster.nodes();
        console.log(nodes);
        return await Promise.all(nodes.map(node => {
            let keyMatches = [];
            console.log(node);
            console.log(keyFilter);
            const stream = node.scanStream({
                match: keyFilter.query
            });
            stream.on('data', resultKeys => {
                keyMatches = keyMatches.concat(resultKeys);
                console.log(resultKeys);
            })
            stream.on('end', () => {
                return Promise.resolve(keyMatches);
            })
        }));

    }
}