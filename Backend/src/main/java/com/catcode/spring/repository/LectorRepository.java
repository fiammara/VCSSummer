package com.catcode.spring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.catcode.spring.model.Lector;

public interface LectorRepository extends MongoRepository<Lector, String> {

}
