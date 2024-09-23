package com.klan.otakuverse.characters.infrastructure.persistence;

import com.klan.otakuverse.characters.domain.CharacterRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreCharacterRepository implements CharacterRepository {

	public PostgreCharacterRepository() {}
}
