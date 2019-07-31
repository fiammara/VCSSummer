package com.catcode.spring.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.catcode.spring.model.Course;
import com.catcode.spring.repository.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseRepository courseRepository;

	@Override
	public List<Course> findAllCourses() {

		return courseRepository.findAll();
	}

	@Override
	public Course findById(String id) {

		return courseRepository.findOne(id);

	}

	@Override
	public void deleteCourse(String id) {
		courseRepository.delete(id);

	}

	@Override
	public void addCourse(Course course) {
		courseRepository.save(course);

	}

}
