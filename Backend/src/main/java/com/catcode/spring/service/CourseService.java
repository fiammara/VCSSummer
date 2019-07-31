package com.catcode.spring.service;

import java.util.List;
import com.catcode.spring.model.Course;

public interface CourseService {

	List<Course> findAllCourses();

	Course findById(String id);

	void deleteCourse(String id);

	void addCourse(Course course);

}
