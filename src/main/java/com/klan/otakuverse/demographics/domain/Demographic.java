package com.klan.otakuverse.demographics.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@AllArgsConstructor
@Data
public class Demographic {

	private UUID id;
	private String name;
	private Date createdAt;
	private Date updatedAt;

	public Demographic() {}
}
