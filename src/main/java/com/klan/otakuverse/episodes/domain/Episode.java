package com.klan.otakuverse.episodes.domain;

import com.klan.otakuverse.seasons.domain.Season;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@AllArgsConstructor
@Data
public class Episode {

	private UUID id;
	private String name;
	private Date releaseDate;
	private Double score;
	private Date createdAt;
	private Date updatedAt;
	private Season season;

	public Episode() {}
}
