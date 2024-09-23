package com.klan.otakuverse.genres.infrastructure.persistence;

import com.klan.otakuverse.genres.domain.Genre;
import com.klan.otakuverse.genres.domain.GenreRepository;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional("otakuverse_transaction_manager")
public class PostgreGenreRepository implements GenreRepository {

	@Autowired
	private SessionFactory sessionFactory;

	public PostgreGenreRepository() {}

	@Override
	public List<Genre> findAll() {
		return sessionFactory.getCurrentSession().createQuery("FROM Genre", Genre.class).getResultList();
	}
}