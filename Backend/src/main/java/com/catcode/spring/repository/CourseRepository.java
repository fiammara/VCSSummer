package com.catcode.spring.repository;




import org.springframework.data.mongodb.repository.MongoRepository;
import com.catcode.spring.model.Course;

public interface CourseRepository extends MongoRepository<Course, String> {



	

}
