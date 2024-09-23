package com.klan.otakuverse.auth.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.Set;
import java.util.UUID;

@AllArgsConstructor
@Data
public class Role {

	private UUID id;
	private String role;
	private Date createdAt;
	private Date updatedAt;
	private Set<Permission> permissions;

	public Role() {}
}
