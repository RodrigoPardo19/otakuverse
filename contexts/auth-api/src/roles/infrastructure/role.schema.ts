import { primaryKey, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { permissions } from '../../permissions/infrastructure/permission.schema';
import { authSchema } from '../../shared/infrastructure/persistence/auth.schema';

export const roles = authSchema.table('roles', {
	id: uuid('id').primaryKey(),
	name: varchar('name', { length: 255 }),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow(),
	deletedAt: timestamp('deleted_at')
});

export const rolePermissions = authSchema.table(
	'roles_permissions',
	{
		roleId: uuid('role_id').references(() => roles.id),
		permissionId: uuid('permission_id').references(() => permissions.id)
	},
	(table) => [
		{
			pk: primaryKey({ columns: [table.roleId, table.permissionId] })
		}
	]
);
