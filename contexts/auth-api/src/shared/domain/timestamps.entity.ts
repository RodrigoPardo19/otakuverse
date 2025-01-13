type DATABASE_PRIMITIVES = any;

export class Timestamps {
	constructor(
		private createdAt: Date,
		private updatedAt: Date | null,
		private deletedAt: Date | null
	) {}

	static fromPrimitives(data: DATABASE_PRIMITIVES): Timestamps {
		return new Timestamps(
			new Date(data.createdAt),
			data.updatedAt ? new Date(data.updatedAt) : null,
			data.deletedAt ? new Date(data.deletedAt) : null
		);
	}
}
