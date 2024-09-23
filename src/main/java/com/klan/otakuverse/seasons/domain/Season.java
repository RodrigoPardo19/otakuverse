package com.klan.otakuverse.seasons.domain;

import com.klan.otakuverse.animes.domain.Anime;
import com.klan.otakuverse.japanese_seasons.domain.JapaneseSeason;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@AllArgsConstructor
@Data
public class Season {

	private UUID id;
	private String name;
	private Date releaseDate;
	private Date finishedDate;
	private Date createdAt;
	private Date updatedAt;
	private Anime anime;
	private JapaneseSeason premiere;

	public Season() {}
}
