package com.klan.otakuverse.genres;

import com.klan.otakuverse.genres.application.GenreFinder;
import com.klan.otakuverse.genres.domain.Genre;
import com.klan.otakuverse.genres.domain.GenreRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;

import static org.mockito.Mockito.when;

public class GenreFinderTest {

	@Mock
	private GenreRepository repository;

	@InjectMocks
	private GenreFinder finder;

	@BeforeEach
	public void setup() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	public void findAll() {
		var genre1 = new Genre();
		var genre2 = new Genre();
		var genres = Arrays.asList(genre1, genre2);
		when(finder.findAll()).thenReturn(genres);

		var result = finder.findAll();

		Assertions.assertEquals(2, result.size());
	}
}