package com.klan.otakuverse.anime_states.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@AllArgsConstructor
@Data
public class AnimeState {

	private UUID id;
	private String status;
	private Date createdAt;
	private Date updatedAt;

	public AnimeState() {}
}
