package com.klan.otakuverse.episodes.infrastructure.persistence;

import com.klan.otakuverse.episodes.domain.EpisodeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreEpisodeRepository implements EpisodeRepository {

	public PostgreEpisodeRepository() {}
}
