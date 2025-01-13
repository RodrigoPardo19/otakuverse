import { PgTableWithColumns } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client, ClientConfig, Pool, PoolConfig } from 'pg';
import { Injectable } from '@nestjs/common';
import { DrizzleConfig } from 'drizzle-orm';

export interface Schema {
	[key: string]: PgTableWithColumns<any>;
}

export interface DrizzlePGConfig {
	pg: {
		connection: 'client' | 'pool';
		config: ClientConfig | PoolConfig;
	};
	config: DrizzleConfig<any> | undefined;
}

@Injectable()
export class DrizzleService {
	async getDrizzle(options: DrizzlePGConfig) {
		console.log('obteniendo drizzle');
		const { pg, config } = options;

		if (pg.connection === 'pool') {
			const pool = new Pool(pg.config);
			return drizzle(pool, config);
		}

		const client = new Client(pg.config);
		await client.connect();
		return drizzle(client, config);
	}
}
