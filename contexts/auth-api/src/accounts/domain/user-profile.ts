export class UserProfile {
	constructor(
		private firstName: string,
		private lastName: string,
		private nickName: string,
		private thumbnail: string,
		private aboutMe: string
	) {}

	// Factory method to create a UserProfile instance from a plain object

	static fromPrimitives(data: any): UserProfile {
		return new UserProfile(
			data.firstName,
			data.lastName,
			data.nickName,
			data.thumbnail,
			data.aboutMe
		);
	}
}
