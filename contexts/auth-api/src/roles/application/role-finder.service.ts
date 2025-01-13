import { Inject, Injectable } from '@nestjs/common';
import { ROLE_REPOSITORY, RoleRepository } from '../domain/role.repository';

@Injectable()
export class RoleFinder {
	constructor(@Inject(ROLE_REPOSITORY) private repository: RoleRepository) {}

	findAll() {
		return this.repository.findAll();
	}
}
