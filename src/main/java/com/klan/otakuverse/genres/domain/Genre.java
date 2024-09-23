package com.klan.otakuverse.genres.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.klan.otakuverse.animes.domain.Anime;
import com.klan.otakuverse.mangas.domain.Manga;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.Set;
import java.util.UUID;

@AllArgsConstructor
@Data
public class Genre {

	private UUID id;
	private String name;
	private Date createdAt;
	private Date updatedAt;

	@JsonIgnore
	private Set<Anime> animes;

	@JsonIgnore
	private Set<Manga> mangas;

	public Genre() {}
}
