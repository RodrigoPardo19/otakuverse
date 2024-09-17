package com.klan.otakuverse.episodes.domain;

import com.klan.otakuverse.auth.domain.User;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
public class EpisodeRating {

	private Episode episode;
	private User user;
	private Double score;
	private Date createdAt;
	private Date updatedAt;

	EpisodeRating() {}
}
