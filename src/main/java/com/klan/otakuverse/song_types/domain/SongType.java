package com.klan.otakuverse.song_types.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@AllArgsConstructor
@Data
public class SongType {

	private UUID id;
	private String type;
	private Date createdAt;
	private Date updatedAt;

	public SongType() {}
}
