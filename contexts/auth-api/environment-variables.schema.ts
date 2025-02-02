import {
	IsEnum,
	IsNumber,
	Min,
	Max,
	IsString,
	IsOptional,
	IsNotEmpty,
	IsUrl
} from 'class-validator';
import { ENVIRONMENT } from './configuration';
import { Type } from 'class-transformer';

export class EnvironmentVariablesSchema {
	@IsEnum(ENVIRONMENT)
	@IsNotEmpty()
	NODE_ENV: ENVIRONMENT;

	@Type(() => Number)
	@IsNumber()
	@Min(1)
	@Max(656535)
	@IsOptional()
	PORT: number;

	@IsString()
	@IsNotEmpty()
	DB_HOST: string;

	@Type(() => Number)
	@IsNumber()
	@Min(1)
	@Max(656535)
	@IsOptional()
	DB_PORT: string;

	@IsString()
	@IsNotEmpty()
	DB_USER: string;

	@IsString()
	@IsNotEmpty()
	DB_PASSWORD: string;

	@IsString()
	@IsNotEmpty()
	DB_DATABASE: string;

	@IsNotEmpty()
	@IsUrl({ require_protocol: true, require_tld: false })
	OTAKUVERSE_FRONT_URL: string;

	@IsNotEmpty()
	@IsUrl({ require_protocol: true, require_tld: false })
	BACKOFFICE_FRONT_URL: string;
}
