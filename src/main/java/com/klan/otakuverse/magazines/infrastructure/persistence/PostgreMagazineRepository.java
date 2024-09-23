package com.klan.otakuverse.magazines.infrastructure.persistence;

import com.klan.otakuverse.magazines.domain.MagazineRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreMagazineRepository implements MagazineRepository {

	public PostgreMagazineRepository() {}
}
