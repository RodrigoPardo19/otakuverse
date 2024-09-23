package com.klan.otakuverse.characters.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@AllArgsConstructor
@Data
public class Character {

	private UUID id;
	private String fullName;
	private String alias;
	private String cover;
	private String description;
	private Date createdAt;
	private Date updatedAt;

	public Character() {}
}
