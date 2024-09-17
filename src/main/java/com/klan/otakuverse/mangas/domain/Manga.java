package com.klan.otakuverse.mangas.domain;

import com.klan.otakuverse.authors.domain.Author;
import com.klan.otakuverse.demographics.domain.Demographic;
import com.klan.otakuverse.genres.domain.Genre;
import com.klan.otakuverse.magazines.domain.Magazine;
import com.klan.otakuverse.manga_states.domain.MangaState;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@AllArgsConstructor
@Data
public class Manga {

	private String id;
	private String name;
	private String cover;
	private String synopsis;
	private Integer volumes;
	private Integer chapters;
	private Date releaseDate;
	private Date finishedDate;
	private Date lastRelease;
	private String background;
	private Double otakusScore;
	private Double criticsScore;
	private Date createdAt;
	private Date updatedAt;
	private MangaState status;
	private Demographic demographic;
	private Magazine  magazine;
	private Set<Genre> genres;
	private Set<Author> authors;

	Manga() {}

}
