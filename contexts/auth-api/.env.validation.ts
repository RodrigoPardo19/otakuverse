import { plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";
import { EnvironmentVariablesSchema } from "./environment-variables.schema";

export function validate(config: Record<string, unknown>) {
	const validatedConfig = plainToInstance(EnvironmentVariablesSchema, config, { enableImplicitConversion: true })

	const errors = validateSync(validatedConfig, { skipMissingProperties: false })

	if (errors.length) {
		throw new Error(errors.toString())
	}

	return validatedConfig;
}
