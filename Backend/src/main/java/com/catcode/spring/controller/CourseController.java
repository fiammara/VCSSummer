package com.catcode.spring.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.catcode.spring.model.Course;
import com.catcode.spring.service.CourseService;




@RestController
@RequestMapping("/api/courses")

@CrossOrigin
public class CourseController {
	
	@Autowired
	private CourseService courseService;
	
	@RequestMapping(method = RequestMethod.POST, value = "/addCourse")
	public String save(@RequestBody Course course) {
		courseService.addCourse(course);

		return course.getId();
	}

	@RequestMapping(method = RequestMethod.GET)
	public List<Course> findAllCourses(){
		return courseService.findAllCourses();
	}
	
	
}
