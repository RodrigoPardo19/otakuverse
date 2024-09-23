package com.klan.otakuverse.character_roles.infrastructure.persistence;

import com.klan.otakuverse.character_roles.domain.CharacterRoleRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreCharacterRoleRepository implements CharacterRoleRepository {

	public PostgreCharacterRoleRepository() {}
}
