package com.klan.otakuverse.auth.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@AllArgsConstructor
@Data
public class Role {

	private String id;
	private String role;
	private Date createdAt;
	private Date updatedAt;
	private Set<Permission> permissions;

	Role() {}
}
