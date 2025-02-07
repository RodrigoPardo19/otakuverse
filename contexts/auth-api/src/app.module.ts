import { Module } from '@nestjs/common';
import { DrizzlePGModule } from '@repo/drizzle-pg-module';
import * as schema from './shared/infrastructure/persistence/drizzle-schemas';
import { AccountModule } from './accounts/account.module';
import { ContextModule } from './contexts/context.module';
import { PermissionModule } from './permissions/permission.module';
import { RoleModule } from './roles/role.module';
import { SharedModule } from './shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import configuration from '../configuration';
import { validate } from '../.env.validation';
import { AppController } from './app.controller';
import config from '../configuration';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, validate, load: [configuration] }),
		DrizzlePGModule.register({
			pg: {
				connection: 'pool',
				config: {
					host: config().database.host,
					port: config().database.port,
					user: config().database.user,
					password: config().database.password,
					database: config().database.database,
					min: 1,
					max: 3
				}
			},
			config: {
				schema: schema
			}
		}),
		SharedModule,
		AccountModule,
		ContextModule,
		RoleModule,
		PermissionModule
	],
	controllers: [AppController],
	providers: []
})
export class AppModule {}
