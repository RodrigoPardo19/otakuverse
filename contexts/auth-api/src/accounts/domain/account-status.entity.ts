import { Timestamps } from '../../shared/domain/timestamps.entity';

export class AccountStatus {
	constructor(
		private id: string,
		private name: string,
		private timestamps: Timestamps
	) {}

	static fromPrimitives(primitives: any): AccountStatus {
		const timestamps = Timestamps.fromPrimitives(primitives);
		return new AccountStatus(primitives.id, primitives.name, timestamps);
	}
}
