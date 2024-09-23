package com.klan.otakuverse.ovas.infrastructure.persistence.hibernate;

import com.klan.otakuverse.ovas.domain.OVARepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreOVARepository implements OVARepository {

	public PostgreOVARepository() {}
}
