import { AccountStatus } from './account-status.entity';

export const ACCOUNT_STATUS_REPOSITORY = 'AccountStatusRepository';

export interface AccountStatusRepository {
	findAll(): Promise<AccountStatus[]>;
}
