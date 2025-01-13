import { Inject, Injectable } from '@nestjs/common';
import { AccountStatus } from '../domain/account-status.entity';
import { AccountStatusRepository } from '../domain/account-status.repository';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { accountStatus } from './account-status.schema';

@Injectable()
export class DrizzleAccountStatusRepository implements AccountStatusRepository {
	constructor(@Inject('DRIZZLE_DB') private db: NodePgDatabase) {}

	async findAll(): Promise<AccountStatus[]> {
		const data = await this.db.select().from(accountStatus);
		return data.map((el) => AccountStatus.fromPrimitives(el));
	}
}
