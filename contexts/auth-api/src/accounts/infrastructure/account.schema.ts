import { primaryKey, text, timestamp, unique, uuid, varchar } from 'drizzle-orm/pg-core';
import { accountStatus } from './account-status.schema';
import { contexts } from '../../contexts/infrastructure/context.schema';
import { roles } from '../../roles/infrastructure/role.schema';
import { authSchema } from '../../shared/infrastructure/persistence/auth.schema';

export const accounts = authSchema.table(
	'accounts',
	{
		id: uuid('id').primaryKey(),
		email: varchar('email', { length: 255 }),
		password: text('password'),
		firstName: varchar('first_name', { length: 255 }),
		lastName: varchar('last_name', { length: 255 }),
		nickName: varchar('nick_name', { length: 255 }),
		thumbnail: varchar('thumbnail', { length: 255 }),
		aboutMe: text('about_me'),
		createdAt: timestamp('created_at').defaultNow(),
		updatedAt: timestamp('updated_at').defaultNow(),
		deletedAt: timestamp('deleted_at'),
		statusId: uuid('status_id').references(() => accountStatus.id),
		contextId: uuid('context_id').references(() => contexts.id)
	},
	(table) => ({
		first: unique('email_context_unique').on(table.email, table.contextId)
	})
);

export const accountRoles = authSchema.table(
	'accounts_roles',
	{
		accountId: uuid('account_id').references(() => accounts.id),
		roleId: uuid('role_id').references(() => roles.id)
	},
	(table) => [
		{
			pk: primaryKey({ columns: [table.accountId, table.roleId] })
		}
	]
);
