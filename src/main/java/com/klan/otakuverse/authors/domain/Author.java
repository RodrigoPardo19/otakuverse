package com.klan.otakuverse.authors.domain;

import com.klan.otakuverse.mangas.domain.Manga;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@AllArgsConstructor
@Data
public class Author {
	private String id;
	private String name;
	private String lastName;
	private String cover;
	private Date createdAt;
	private Date updatedAt;
	private Set<Manga> mangas;

	Author() {}
}
