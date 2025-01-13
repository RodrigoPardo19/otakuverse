import { Role } from './role.entity';

export const ROLE_REPOSITORY = 'RoleRepository';

export interface RoleRepository {
	findAll(): Promise<Role[]>;
}
