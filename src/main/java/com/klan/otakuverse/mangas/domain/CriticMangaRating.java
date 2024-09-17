package com.klan.otakuverse.mangas.domain;

import com.klan.otakuverse.auth.domain.User;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
public class CriticMangaRating {

	private User user;
	private Manga manga;
	private String comment;
	private Double score;
	private Date createdAt;
	private Date updatedAt;

	CriticMangaRating() {}
}
