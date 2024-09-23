package com.klan.otakuverse.genres.infrastructure;

import com.klan.otakuverse.genres.application.GenreFinder;
import com.klan.otakuverse.genres.domain.Genre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/genres")
public class GenreController {

	@Autowired
	private GenreFinder finder;

	public GenreController() {}

	@GetMapping
	public List<Genre> findAll() {
		return this.finder.findAll();
	}
}
