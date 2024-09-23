package com.klan.otakuverse.movies.infrastructure.persistence;

import com.klan.otakuverse.movies.domain.MovieRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreMovieRepository implements MovieRepository {

	public PostgreMovieRepository() {}
}
