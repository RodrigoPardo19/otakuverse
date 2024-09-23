package com.klan.otakuverse.auth.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@AllArgsConstructor
@Data
public class Permission {

	private UUID id;
	private String permission;
	private Date createdAt;
	private Date updatedAt;

	public Permission() {}
}
