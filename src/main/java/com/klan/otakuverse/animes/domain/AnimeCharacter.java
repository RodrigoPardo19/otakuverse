package com.klan.otakuverse.animes.domain;

import com.klan.otakuverse.character_roles.domain.CharacterRole;
import com.klan.otakuverse.characters.domain.Character;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
public class AnimeCharacter {

	private Anime anime;
	private Character character;
	private CharacterRole role;
	private Date createdAt;
	private Date updatedAt;

	AnimeCharacter() {}
}
