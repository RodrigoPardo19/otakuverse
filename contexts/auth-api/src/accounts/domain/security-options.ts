export class SecurityOptions {
	constructor(
		private email: string,
		private password: string
	) {}

	static fromPrimitives(data: any): SecurityOptions {
		return new SecurityOptions(data.email, data.password);
	}
}
