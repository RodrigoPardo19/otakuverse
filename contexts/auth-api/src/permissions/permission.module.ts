import { Module } from '@nestjs/common';
import { PermissionFinder } from './application/permission-finder.service';
import { PERMISSION_REPOSITORY } from './domain/permission.repository';
import { DrizzlePermissionRepository } from './infrastructure/drizzle-permission.repository';

@Module({
	imports: [],
	providers: [
		PermissionFinder,
		{ provide: PERMISSION_REPOSITORY, useClass: DrizzlePermissionRepository }
	],
	exports: []
})
export class PermissionModule {}
