import { Module } from '@nestjs/common';
import { RoleFinder } from './application/role-finder.service';
import { ROLE_REPOSITORY } from './domain/role.repository';
import { DrizzleRoleRepository } from './infrastructure/drizzle-role.repository';

@Module({
	imports: [],
	providers: [RoleFinder, { provide: ROLE_REPOSITORY, useClass: DrizzleRoleRepository }],
	exports: []
})
export class RoleModule {}
