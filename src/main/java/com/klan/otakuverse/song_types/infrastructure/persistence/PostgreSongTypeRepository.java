package com.klan.otakuverse.song_types.infrastructure.persistence;

import com.klan.otakuverse.song_types.domain.SongTypeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreSongTypeRepository implements SongTypeRepository {

	public PostgreSongTypeRepository() {}
}
