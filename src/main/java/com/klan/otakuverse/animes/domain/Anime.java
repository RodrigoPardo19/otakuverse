package com.klan.otakuverse.animes.domain;

import com.klan.otakuverse.anime_states.domain.AnimeState;
import com.klan.otakuverse.demographics.domain.Demographic;
import com.klan.otakuverse.genres.domain.Genre;
import com.klan.otakuverse.japanese_seasons.domain.JapaneseSeason;
import com.klan.otakuverse.mangas.domain.Manga;
import com.klan.otakuverse.producers.domain.Producer;
import com.klan.otakuverse.studios.domain.Studio;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.Set;
import java.util.UUID;

@AllArgsConstructor
@Data
public class Anime {

	private UUID id;
	private String name;
	private String cover;
	private String synopsis;
	private Integer episodes;
	private Date releaseDate;
	private Date finishedDate;
	private String background;
	private Double otakusScore;
	private Double criticsScore;
	private Date createdAt;
	private Date updatedAt;
	private AnimeState status;
	private Demographic demographic;
	private JapaneseSeason premiere;
	private Manga manga;
	private Set<Genre> genres;
	private Set<Studio> studios;
	private Set<Producer> producers;
	private Set<Anime> related;

	public Anime() {}
}
