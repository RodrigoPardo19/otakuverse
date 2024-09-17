package com.klan.otakuverse.producers.domain;

import com.klan.otakuverse.animes.domain.Anime;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@AllArgsConstructor
@Data
public class Producer {

	private String id;
	private String name;
	private String description;
	private Date establishedAt;
	private String webSite;
	private String cover;
	private Date createdAt;
	private Date updatedAt;
	private Set<Anime> animes;

	Producer() {}
}
