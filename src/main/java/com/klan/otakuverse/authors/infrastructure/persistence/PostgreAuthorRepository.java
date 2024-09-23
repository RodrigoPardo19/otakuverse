package com.klan.otakuverse.authors.infrastructure.persistence;

import com.klan.otakuverse.authors.domain.AuthorRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreAuthorRepository implements AuthorRepository {

	public PostgreAuthorRepository() {}
}
