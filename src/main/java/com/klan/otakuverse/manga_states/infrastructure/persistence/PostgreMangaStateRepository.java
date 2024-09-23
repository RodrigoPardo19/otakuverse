package com.klan.otakuverse.manga_states.infrastructure.persistence;

import com.klan.otakuverse.manga_states.domain.MangaStateRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreMangaStateRepository implements MangaStateRepository {

	public PostgreMangaStateRepository() {}
}
