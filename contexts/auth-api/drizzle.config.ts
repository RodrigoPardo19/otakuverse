import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './src/shared/infrastructure/persistence/drizzle-schemas.ts',
	out: './drizzle',
	dialect: 'postgresql',
	dbCredentials: {
		host: process.env.DB_HOST,
		port: +process.env.DB_PORT,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		ssl: false
	}
});
