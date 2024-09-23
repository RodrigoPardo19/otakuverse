package com.klan.otakuverse.seasons.infrastructure.persistence;

import com.klan.otakuverse.seasons.domain.SeasonRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreSeasonRepository implements SeasonRepository {

	public PostgreSeasonRepository() {}
}
