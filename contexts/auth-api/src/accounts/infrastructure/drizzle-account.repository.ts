import { Inject, Injectable } from '@nestjs/common';
import { Account } from '../domain/account.entity';
import { AccountRepository } from '../domain/account.repository';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { accounts } from './account.schema';

@Injectable()
export class DrizzleAccountRepository implements AccountRepository {
	constructor(@Inject('DRIZZLE_DB') private db: NodePgDatabase) {}

	async findAll(): Promise<Account[]> {
		const data = await this.db.select().from(accounts).execute();
		return data.map((row) => Account.fromPrimitives(row));
	}
}
