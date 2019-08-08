package com.catcode.spring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.catcode.spring.model.Blog;

public interface BlogRepository extends MongoRepository<Blog, String> {

}
