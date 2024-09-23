package com.klan.otakuverse.animes.infrastructure.persistence;

import com.klan.otakuverse.animes.domain.AnimeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreAnimeRepository implements AnimeRepository {

	public PostgreAnimeRepository() {}
}
