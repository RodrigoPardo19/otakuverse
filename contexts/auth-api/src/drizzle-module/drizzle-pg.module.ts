import { DynamicModule, Module } from '@nestjs/common';
import { DrizzlePGConfig, DrizzleService } from './drizzle-pg.service';

@Module({})
export class DrizzlePGModule {
	static register(options: DrizzlePGConfig): DynamicModule {
		return {
			module: DrizzlePGModule,
			global: true,
			providers: [
				DrizzleService,
				{
					provide: 'DRIZZLE_DB',
					inject: [DrizzleService],
					useFactory: async (service: DrizzleService) => {
						return service.getDrizzle(options);
					}
				}
			],
			exports: ['DRIZZLE_DB']
		};
	}
}
