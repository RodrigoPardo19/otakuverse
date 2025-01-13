import { Context } from './context.entity';

export const CONTEXT_REPOSITORY = 'ContextRepository';

export interface ContextRepository {
	findAll(): Promise<Context[]>;
}
