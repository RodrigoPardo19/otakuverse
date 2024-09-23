package com.klan.otakuverse.character_roles.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@AllArgsConstructor
@Data
public class CharacterRole {

	private UUID id;
	private String role;
	private Date createdAt;
	private Date updatedAt;

	public CharacterRole() {}
}
