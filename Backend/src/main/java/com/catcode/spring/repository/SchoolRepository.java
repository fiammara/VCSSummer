package com.catcode.spring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.catcode.spring.model.School;

public interface SchoolRepository extends MongoRepository<School, String> {

}
