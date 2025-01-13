import { Inject, Injectable } from '@nestjs/common';
import { Account } from '../domain/account.entity';
import { ACCOUNT_REPOSITORY, AccountRepository } from '../domain/account.repository';

@Injectable()
export class AccountFinder {
	constructor(@Inject(ACCOUNT_REPOSITORY) private repository: AccountRepository) {}

	async findAll(): Promise<Account[]> {
		return this.repository.findAll();
	}
}
