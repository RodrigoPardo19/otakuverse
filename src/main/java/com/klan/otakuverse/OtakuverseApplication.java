package com.klan.otakuverse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;

@SpringBootApplication(exclude = HibernateJpaAutoConfiguration.class)
public class OtakuverseApplication {

	public static void main(String[] args) {
		SpringApplication.run(OtakuverseApplication.class, args);
	}
}
