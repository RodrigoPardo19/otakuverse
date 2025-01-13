import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { AccountStatus } from '../domain/account-status.entity';
import { AccountStatusFinder } from '../application/account-status-finder.service';

@Controller('account-status')
export class AccountStatusController {
	constructor(private accountStatusFinder: AccountStatusFinder) {}

	@Get()
	findAll(): Promise<AccountStatus[]> {
		try {
			return this.accountStatusFinder.findAll();
		} catch (error) {
			throw new InternalServerErrorException();
		}
	}
}
