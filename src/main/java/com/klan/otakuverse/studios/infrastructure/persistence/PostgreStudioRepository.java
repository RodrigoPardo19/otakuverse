package com.klan.otakuverse.studios.infrastructure.persistence;

import com.klan.otakuverse.studios.domain.StudioRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreStudioRepository implements StudioRepository {

	public PostgreStudioRepository() {}
}
