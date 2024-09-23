package com.klan.otakuverse.genres.application;

import com.klan.otakuverse.genres.domain.Genre;
import com.klan.otakuverse.genres.domain.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenreFinder {

	@Autowired
	private GenreRepository repository;

	public GenreFinder() {}

	public List<Genre> findAll() {
		return this.repository.findAll();
	}
}
