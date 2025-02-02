import { Module } from '@nestjs/common';
import { DrizzlePGModule } from './drizzle-module/drizzle-pg.module';
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

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, validate, load: [configuration] }),
		DrizzlePGModule.register({
			pg: {
				connection: 'client',
				config: {
					host: process.env.DB_HOST,
					port: +process.env.DB_PORT,
					user: process.env.DB_USER,
					password: process.env.DB_PASSWORD,
					database: process.env.DB_DATABASE
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
