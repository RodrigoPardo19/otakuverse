package com.klan.otakuverse.mangas.infrastructure.persistence;

import com.klan.otakuverse.mangas.domain.MangaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreMangaRepository implements MangaRepository {

	public PostgreMangaRepository() {}
}
