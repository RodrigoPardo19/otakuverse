import { Timestamps } from '../../shared/domain/timestamps.entity';

export class Context {
	private id: string;
	private name: string;
	private description: string;
	private timestamps: Timestamps;

	constructor() {}
}
