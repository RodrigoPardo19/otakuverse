package com.klan.otakuverse.auth.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
public class Permission {

	private String id;
	private String permission;
	private Date createdAt;
	private Date updatedAt;

	Permission() {}
}
