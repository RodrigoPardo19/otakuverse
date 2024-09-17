package com.klan.otakuverse.demographics.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
public class Demographic {
	private String id;
	private String name;
	private Date createdAt;
	private Date updatedAt;

	Demographic() {}
}
