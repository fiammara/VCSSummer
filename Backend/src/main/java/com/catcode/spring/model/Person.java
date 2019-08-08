package com.catcode.spring.model;

import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "persons")
public class Person {
	@Id    
	private String id;	
	private String name;     
	private String surname;	
	private List<String> likedCourses;

	
    
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public List<String> getCourses() {
		return likedCourses;
	}

	public void setCourses(List<String> courses) {
		this.likedCourses = courses;
	}

	
}
