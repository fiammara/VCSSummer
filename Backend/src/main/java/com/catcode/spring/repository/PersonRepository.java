package com.catcode.spring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.catcode.spring.model.Person;

public interface PersonRepository extends MongoRepository<Person, String> {

}
