import { timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { authSchema } from '../../shared/infrastructure/persistence/auth.schema';

export const accountStatus = authSchema.table('account_status', {
	id: uuid('id').primaryKey(),
	name: varchar('name', { length: 255 }),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow(),
	deletedAt: timestamp('deleted_at')
});
