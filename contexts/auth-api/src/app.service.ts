import { Injectable } from '@nestjs/common';

interface AuthTokens {
	accessToken: string;
	refreshToken: string;
}

@Injectable()
export class AppService {
	getHello(): string {
		return 'Hello World!';
	}

	public async signIn(credentials: { email: string; password: string }): Promise<AuthTokens> {
		const { email, password } = credentials;
		if (email && password) {
			return { accessToken: 'access_token', refreshToken: 'refresh_token' };
		}

		throw new UnauthorizedError();
	}
}

export class UnauthorizedError extends Error {
	constructor(message?: 'UnauthorizedError') {
		super(message);
		this.name = 'UnauthorizedError';
	}
}
