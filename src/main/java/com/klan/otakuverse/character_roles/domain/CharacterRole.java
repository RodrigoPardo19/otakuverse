package com.klan.otakuverse.character_roles.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
public class CharacterRole {

	private String id;
	private String role;
	private Date createdAt;
	private Date updatedAt;

	CharacterRole() {}
}
