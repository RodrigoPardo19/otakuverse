package com.klan.otakuverse.animes.domain;

import com.klan.otakuverse.auth.domain.User;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
public class OtakuRating {

	private User user;
	private Anime anime;
	private String comment;
	private Double score;
	private Date createdAt;
	private Date updatedAt;

	public OtakuRating() {}
}
