import { Inject, Injectable } from '@nestjs/common';
import { CONTEXT_REPOSITORY, ContextRepository } from '../domain/context.repository';

@Injectable()
export class ContextFinder {
	constructor(@Inject(CONTEXT_REPOSITORY) private repository: ContextRepository) {}

	async findAll() {
		return this.repository.findAll();
	}
}
