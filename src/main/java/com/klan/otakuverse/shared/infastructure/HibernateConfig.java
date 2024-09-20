package com.klan.otakuverse.shared.infastructure;

import org.hibernate.cfg.AvailableSettings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.io.File;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Configuration
@EnableTransactionManagement
public class HibernateConfig {

	@Autowired
	private Environment env;

	HibernateConfig() {}

	@Bean("otakuverse_transaction_manager")
	public PlatformTransactionManager hibernateTransactionManager() throws IOException {
		HibernateTransactionManager transactionManager = new HibernateTransactionManager();
		transactionManager.setSessionFactory(sessionFactory().getObject());

		return transactionManager;
	}

	@Bean(name = "entityManagerFactory")
	public LocalSessionFactoryBean sessionFactory() throws IOException {
		LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
		sessionFactory.setDataSource(dataSource());
		sessionFactory.setHibernateProperties(properties());
		List<Resource> mappingFiles = searchMappingFiles();
		sessionFactory.setMappingLocations(mappingFiles.toArray(new Resource[mappingFiles.size()]));

		return sessionFactory;
	}

	@Bean("otakuverse_data_source")
	public DataSource dataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		final var DB_USERNAME = env.getProperty("DB_USERNAME");
		final var DB_PASSWORD = env.getProperty("DB_PASSWORD");
		final var DB_NAME = env.getProperty("DB_NAME");
		final var DB_HOST = env.getProperty("DB_HOST");
		final var DB_PORT = env.getProperty("DB_PORT");
		var DB_URL = "jdbc:postgresql://" + DB_HOST + ":" + DB_PORT + "/" + DB_NAME;

		dataSource.setDriverClassName("org.postgresql.Driver");
		dataSource.setUrl(DB_URL);
		dataSource.setUsername(DB_USERNAME);
		dataSource.setPassword(DB_PASSWORD);

		var populator = new ResourceDatabasePopulator();
		populator.addScript(new ClassPathResource("data.sql"));
		populator.execute(dataSource);

		return dataSource;
	}

	private Properties properties() {
		Properties hibernateProperties = new Properties();
		hibernateProperties.put(AvailableSettings.TRANSFORM_HBM_XML, true);
		hibernateProperties.put(AvailableSettings.SHOW_SQL, true);
		hibernateProperties.put(AvailableSettings.HBM2DDL_AUTO, "validate");
		return hibernateProperties;
	}

	private List<Resource> searchMappingFiles() {
		List<String> modules = subdirectoriesFor();
		List<String> goodPaths = new ArrayList<>();

		for (String module : modules) {
			String[] files = mappingFilesIn(module + "/infrastructure/persistence/hibernate/");

			for (String file : files) {
				goodPaths.add(module + "/infrastructure/persistence/hibernate/" + file);
			}
		}

		return goodPaths.stream().map(FileSystemResource::new).collect(Collectors.toList());
	}

	private List<String> subdirectoriesFor() {
		String path = "./src/main/java/com/klan/otakuverse/";
		String[] files = new File(path).list((current, name) -> new File(current, name).isDirectory());

		if (files == null) {
			return Collections.emptyList();
		}

		return Arrays.stream(files).map(file -> path + file).collect(Collectors.toList());
	}

	private String[] mappingFilesIn(String path) {
		List<String> fileList = new ArrayList<>();
		String[] hbmFiles = new File(path).list((current, name) -> new File(current, name).getName().contains(".hbm.xml"));

		if (hbmFiles != null) {
			fileList.addAll(Arrays.asList(hbmFiles));
		}

		return fileList.toArray(new String[0]);
	}
}
