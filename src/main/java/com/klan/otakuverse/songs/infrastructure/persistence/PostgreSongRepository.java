package com.klan.otakuverse.songs.infrastructure.persistence;

import com.klan.otakuverse.songs.domain.SongRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreSongRepository implements SongRepository {
	public PostgreSongRepository() {}
}
