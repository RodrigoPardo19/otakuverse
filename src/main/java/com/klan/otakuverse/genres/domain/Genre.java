package com.klan.otakuverse.genres.domain;

import com.klan.otakuverse.animes.domain.Anime;
import com.klan.otakuverse.mangas.domain.Manga;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@AllArgsConstructor
@Data
public class Genre {

	private String id;
	private String name;
	private Date createdAt;
	private Date updatedAt;
	private Set<Anime> animes;
	private Set<Manga> mangas;

	Genre() {}
}
