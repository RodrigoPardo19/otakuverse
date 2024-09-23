package com.klan.otakuverse.auth.infrastructure.persistence;

import com.klan.otakuverse.auth.domain.RoleRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreRoleRepository implements RoleRepository {

	public PostgreRoleRepository() {}
}
