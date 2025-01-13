import { Permission } from './permission.entity';

export const PERMISSION_REPOSITORY = 'PermissionRepository';

export interface PermissionRepository {
	findAll(): Promise<Permission[]>;
}
