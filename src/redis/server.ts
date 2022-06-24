import Redis from 'ioredis';
import { config } from '../convict/config';
import { INodes } from '../intefaces/redisInterface';

const redisConfig = config.get('redis');
export const nodes: INodes[] = [];

redisConfig.forEach(async (element: string) => {
	const data = element.split(':');
	return nodes.push({
		port: parseInt(data[1]),
		host: data[0],
	});
});

export const cluster = new Redis.Cluster(nodes);
