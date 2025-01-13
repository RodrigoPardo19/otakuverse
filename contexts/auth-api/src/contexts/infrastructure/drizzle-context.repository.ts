import { Injectable } from '@nestjs/common';
import { ContextRepository } from '../domain/context.repository';

@Injectable()
export class DrizzleContextRepository implements ContextRepository {
	constructor() {}

	async findAll() {
		return [];
	}
}
