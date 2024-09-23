package com.klan.otakuverse.mangas.domain;

import com.klan.otakuverse.character_roles.domain.CharacterRole;
import com.klan.otakuverse.characters.domain.Character;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
public class MangaCharacter {

	private Manga manga;
	private Character character;
	private CharacterRole role;
	private Date createdAt;
	private Date updatedAt;

	public MangaCharacter() {}
}
