import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) { }

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	// ¿Qué es un trottle se preguntarán ustedes?
	// Un trottle es un rate limiter, basicamente es un pequeño componente que en este caso está implementeado por la librería trhottler de node
	@Throttle()
	editReview(): string { }
}
