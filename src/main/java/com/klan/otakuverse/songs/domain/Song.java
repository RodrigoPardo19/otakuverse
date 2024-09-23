package com.klan.otakuverse.songs.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@AllArgsConstructor
@Data
public class Song {

	private UUID id;
	private String name;
	private String videoUrl;
	private Date createdAt;
	private Date updatedAt;

	public Song() {}
}
