package com.klan.otakuverse.japanese_seasons.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@AllArgsConstructor
@Data
public class JapaneseSeason {

	private UUID id;
	private String season;
	private Date createdAt;
	private Date updatedAt;

	public JapaneseSeason() {}
}
