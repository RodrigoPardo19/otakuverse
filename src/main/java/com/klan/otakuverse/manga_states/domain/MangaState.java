package com.klan.otakuverse.manga_states.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
public class MangaState {

	private String id;
	private String status;
	private Date createdAt;
	private Date updatedAt;

	MangaState() {}
}
