package com.klan.otakuverse.animes.infastructure;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AnimeController {

	@GetMapping("/")
	public String helloWorld() {
		return "Welcome to OtakuVerse";
	}
}
