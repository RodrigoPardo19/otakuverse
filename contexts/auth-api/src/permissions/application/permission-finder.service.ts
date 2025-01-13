import { Inject, Injectable } from '@nestjs/common';
import { PERMISSION_REPOSITORY, PermissionRepository } from '../domain/permission.repository';

@Injectable()
export class PermissionFinder {
	constructor(@Inject(PERMISSION_REPOSITORY) private repository: PermissionRepository) {}

	findAll() {
		return this.repository.findAll();
	}
}
