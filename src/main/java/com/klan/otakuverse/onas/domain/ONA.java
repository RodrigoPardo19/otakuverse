package com.klan.otakuverse.onas.domain;

import com.klan.otakuverse.animes.domain.Anime;
import com.klan.otakuverse.producers.domain.Producer;
import com.klan.otakuverse.studios.domain.Studio;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.Set;
import java.util.UUID;

@AllArgsConstructor
@Data
public class ONA {

	private UUID id;
	private String name;
	private Date releaseDate;
	private String cover;
	private Date createdAt;
	private Date updatedAt;
	private Anime anime;
	private Set<Studio> studios;
	private Set<Producer> producers;

	public ONA() {}
}
