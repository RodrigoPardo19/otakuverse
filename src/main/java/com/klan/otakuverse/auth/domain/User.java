package com.klan.otakuverse.auth.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.Set;
import java.util.UUID;

@AllArgsConstructor
@Data
public class User {

	private UUID id;
	private String email;
	private String password;
	private String name;
	private String lastName;
	private String nickName;
	private String thumbnail;
	private String aboutMe;
	private Date createdAt;
	private Date updatedAt;
	private Set<Role> roles;

	public User() {}
}
