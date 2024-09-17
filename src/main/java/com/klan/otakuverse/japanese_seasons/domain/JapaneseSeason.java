package com.klan.otakuverse.japanese_seasons.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
public class JapaneseSeason {

	private String id;
	private String season;
	private Date createdAt;
	private Date updatedAt;

	JapaneseSeason() {}
}
