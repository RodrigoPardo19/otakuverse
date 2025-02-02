import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
	constructor() {}

	@Get()
	sayHello() {
		return 'Welcome to the Otakuverse auth api :D';
	}
}
