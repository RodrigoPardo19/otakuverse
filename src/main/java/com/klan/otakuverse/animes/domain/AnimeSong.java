package com.klan.otakuverse.animes.domain;

import com.klan.otakuverse.song_types.domain.SongType;
import com.klan.otakuverse.songs.domain.Song;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class AnimeSong {

	private Anime anime;
	private Song song;
	private Integer order;
	private SongType type;

	AnimeSong() {}
}
