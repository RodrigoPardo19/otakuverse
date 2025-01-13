import { Injectable } from '@nestjs/common';
import { RoleRepository } from '../domain/role.repository';
import { Role } from '../domain/role.entity';

@Injectable()
export class DrizzleRoleRepository implements RoleRepository {
	constructor() {}

	findAll(): Promise<Role[]> {
		throw new Error('Method not implemented.');
	}
}
