package com.klan.otakuverse.magazines.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
public class Magazine {

	private String id;
	private String name;
	private Date createdAt;
	private Date updatedAt;

	Magazine() {}
}
