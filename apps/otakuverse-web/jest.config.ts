/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './'
});

const config: Config = {
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	testMatch: ['**/tests/**/domain/**/*.spec.ts', '**/tests/**/application/**/*.spec.ts'],
	setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts']
};

export default createJestConfig(config) as Config;
