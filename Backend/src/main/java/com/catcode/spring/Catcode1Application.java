package com.catcode.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.catcode.spring")
public class Catcode1Application {

	public static void main(String[] args) {
		SpringApplication.run(Catcode1Application.class, args);
		
	}

}
