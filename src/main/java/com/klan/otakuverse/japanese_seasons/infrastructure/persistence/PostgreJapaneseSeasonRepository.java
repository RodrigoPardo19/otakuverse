package com.klan.otakuverse.japanese_seasons.infrastructure.persistence;

import com.klan.otakuverse.japanese_seasons.domain.JapaneseSeasonRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreJapaneseSeasonRepository implements JapaneseSeasonRepository {

	public PostgreJapaneseSeasonRepository() {}
}
