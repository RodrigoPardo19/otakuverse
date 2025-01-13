import { Account } from './account.entity';

export const ACCOUNT_REPOSITORY = 'AccountRepository';

export interface AccountRepository {
	findAll(): Promise<Account[]>;
}
