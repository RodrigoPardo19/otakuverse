package com.klan.otakuverse.songs.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
public class Song {

	private String id;
	private String name;
	private String videoUrl;
	private Date createdAt;
	private Date updatedAt;

	Song() {}
}
