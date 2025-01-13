import { Injectable } from '@nestjs/common';
import { PermissionRepository } from '../domain/permission.repository';
import { Permission } from '../domain/permission.entity';

@Injectable()
export class DrizzlePermissionRepository implements PermissionRepository {
	constructor() {}

	async findAll(): Promise<Permission[]> {
		return [];
	}
}
