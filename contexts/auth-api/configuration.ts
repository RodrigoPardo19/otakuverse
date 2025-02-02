export default function () {
	return {
		environment: {
			nodeEnv: process.env.NODE_ENV,
			port: process.env.PORT ?? 3000
		},
		database: {
			host: process.env.DB_HOST,
			port: process.env.DB_PORT ?? 5432,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE
		},
		domains: {
			otakuverseFrontUrl: process.env.OTAKUVERSE_FRONT_URL,
			backofficeFrontUrl: process.env.BACKOFFICE_FRONT_URL
		}
	};
}

// export interface EnvironmentVariables {
// 	environment: {
// 		NODE_ENV: string;
// 		PORT: number;
// 	};
// 	database: {
// 		host: string;
// 		port: number;
// 		user: string;
// 		password: string;
// 		database: string;
// 	};
// }

export enum ENVIRONMENT {
	DEVELOPMENT = 'development',
	PRODUCTION = 'production'
}
