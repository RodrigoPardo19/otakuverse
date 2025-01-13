import { Timestamps } from '../../shared/domain/timestamps.entity';
import { SecurityOptions } from './security-options';
import { UserProfile } from './user-profile';

export class Account {
	constructor(
		private id: string,
		private securityOptions: SecurityOptions,
		private profile: UserProfile,
		private timestamps: Timestamps
	) {}

	// factory method

	static fromPrimitives(data: any) {
		const securityOptions = SecurityOptions.fromPrimitives(data.securityOptions);
		const profile = UserProfile.fromPrimitives(data.profile);
		const timestamps = Timestamps.fromPrimitives(data.timestamps);
		return new Account(data.id, securityOptions, profile, timestamps);
	}
}
