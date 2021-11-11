package com.task.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.task.entity.Task;

public interface Taskrepo extends MongoRepository<Task, Integer> {

	

}
