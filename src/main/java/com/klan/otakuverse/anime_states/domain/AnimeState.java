package com.klan.otakuverse.anime_states.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
public class AnimeState {

	private String id;
	private String status;
	private Date createdAt;
	private Date updatedAt;

	AnimeState() {}
}
