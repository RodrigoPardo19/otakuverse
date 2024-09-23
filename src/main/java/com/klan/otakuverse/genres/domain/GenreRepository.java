package com.klan.otakuverse.genres.domain;

import java.util.List;

public interface GenreRepository {
	List<Genre> findAll();
}
