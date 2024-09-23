package com.klan.otakuverse.producers.infrastructure.persistence;

import com.klan.otakuverse.producers.domain.ProducerRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreProducerRepository implements ProducerRepository {

	public PostgreProducerRepository() {}
}
