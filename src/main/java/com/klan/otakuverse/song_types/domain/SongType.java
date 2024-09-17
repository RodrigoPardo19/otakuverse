package com.klan.otakuverse.song_types.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
public class SongType {

	private String id;
	private String type;
	private Date createdAt;
	private Date updatedAt;

	SongType() {}
}
