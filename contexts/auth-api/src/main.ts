import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import config from '../configuration';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const cors =
		config().environment.nodeEnv === 'production'
			? { origin: [config().domains.otakuverseFrontUrl, config().domains.backofficeFrontUrl] }
			: true;

	const app = await NestFactory.create(AppModule, { cors });
	app.setGlobalPrefix('api');
	app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidUnknownValues: true }));

	if (config().environment.nodeEnv !== 'production') {
		const config = new DocumentBuilder()
			.addBearerAuth()
			.setTitle('Otakuverse Auth API Specification')
			.build();

		const document = SwaggerModule.createDocument(app, config);

		SwaggerModule.setup('/auth/api/docs', app, document, {
			swaggerOptions: { persistAuthorization: true }
		});
	}

	await app.listen(config().environment.port ?? 4100);
}

bootstrap();
