package com.catcode.spring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "certificates")
public class Certificate {
	@Id    
	private String id;	
	private String logo;     
	private String title;   
	private String about;
    
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}	
	

	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}
	
}
