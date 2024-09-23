package com.klan.otakuverse.studios.domain;

import com.klan.otakuverse.animes.domain.Anime;
import com.klan.otakuverse.movies.domain.Movie;
import com.klan.otakuverse.onas.domain.ONA;
import com.klan.otakuverse.ovas.domain.OVA;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.Set;
import java.util.UUID;

@AllArgsConstructor
@Data
public class Studio {

	private UUID id;
	private String name;
	private String description;
	private Date establishedAt;
	private String webSite;
	private String cover;
	private Date createdAt;
	private Date updatedAt;
	private Set<Anime> animes;
	private Set<Movie> movies;
	private Set<OVA> ovas;
	private Set<ONA> onas;

	public Studio() {}
}
