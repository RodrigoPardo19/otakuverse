package com.klan.otakuverse.animes.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
public class Anime {
	private String id;
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

	Anime() {}
}
