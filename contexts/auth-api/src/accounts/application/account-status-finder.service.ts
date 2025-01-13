import { Inject, Injectable } from '@nestjs/common';
import {
	ACCOUNT_STATUS_REPOSITORY,
	AccountStatusRepository
} from '../domain/account-status.repository';

@Injectable()
export class AccountStatusFinder {
	constructor(@Inject(ACCOUNT_STATUS_REPOSITORY) private repository: AccountStatusRepository) {}

	findAll() {
		return this.repository.findAll();
	}
}
