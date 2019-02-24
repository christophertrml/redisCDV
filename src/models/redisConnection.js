export default class RedisConnection {
    constructor(name, redisServerUris, authenticationOptions) {
        this.name = name;
        this.redisServerUris = redisServerUris;
        this.authenticationOptions = authenticationOptions;
    }
}