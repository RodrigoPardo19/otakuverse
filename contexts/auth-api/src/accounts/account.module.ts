import { Module } from '@nestjs/common';
import { DrizzleAccountRepository } from './infrastructure/drizzle-account.repository';
import { ACCOUNT_REPOSITORY } from './domain/account.repository';
import { ACCOUNT_STATUS_REPOSITORY } from './domain/account-status.repository';
import { DrizzleAccountStatusRepository } from './infrastructure/drizzle-account-status.repository';
import { AccountFinder } from './application/account-finder.service';
import { AccountStatusFinder } from './application/account-status-finder.service';
import { AccountStatusController } from './infrastructure/account-status.controller';

@Module({
	imports: [],
	controllers: [AccountStatusController],
	providers: [
		AccountFinder,
		AccountStatusFinder,
		{
			provide: ACCOUNT_REPOSITORY,
			useClass: DrizzleAccountRepository
		},
		{
			provide: ACCOUNT_STATUS_REPOSITORY,
			useClass: DrizzleAccountStatusRepository
		}
	]
})
export class AccountModule {}
