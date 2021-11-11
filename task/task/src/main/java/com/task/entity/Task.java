package com.task.entity;



import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="task")
public class Task {
	@Id
	private int id;
	private String taskname;
	private String status;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTaskname() {
		return taskname;
	}
	public void setTaskname(String taskname) {
		this.taskname = taskname;
	}
	@Override
	public String toString() {
		return "Task [id=" + id + ", taskname=" + taskname + ", status=" + status + "]";
	}
	

	
}
