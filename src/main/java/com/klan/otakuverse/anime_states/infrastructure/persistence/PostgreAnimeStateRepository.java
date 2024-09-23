package com.klan.otakuverse.anime_states.infrastructure.persistence;

import com.klan.otakuverse.anime_states.domain.AnimeStateRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreAnimeStateRepository implements AnimeStateRepository {

	public PostgreAnimeStateRepository() {}
}
