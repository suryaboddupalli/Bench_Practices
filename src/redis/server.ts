import Redis from 'ioredis';
import { config } from '../convict/config';
import { INodes } from '../intefaces/redisInterface';

const nodes: INodes[] = [];

config.get('redis').forEach(async (element: string) => {
	const data = element.split(':');
	return nodes.push({
		port: parseInt(data[1]),
		host: data[0],
	});
});

export const cluster = new Redis.Cluster(nodes);
