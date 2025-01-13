import { Module } from '@nestjs/common';
import { ContextFinder } from './application/context-finder.service';
import { CONTEXT_REPOSITORY } from './domain/context.repository';
import { DrizzleContextRepository } from './infrastructure/drizzle-context.repository';

@Module({
	imports: [],
	controllers: [],
	providers: [ContextFinder, { provide: CONTEXT_REPOSITORY, useClass: DrizzleContextRepository }]
})
export class ContextModule {}
