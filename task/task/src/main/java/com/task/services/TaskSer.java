package com.task.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.task.entity.Task;
import com.task.repo.Taskrepo;


@Service
public class TaskSer {
	@Autowired
	Taskrepo ur;
	

	

	public Task saveall(Task u) {
		// TODO Auto-generated method stub
		ur.save(u);
		return u;
		
	}


	public List<Task> getall() {
		// TODO Auto-generated method stub
		List<Task> li=ur.findAll();
		return li;
	}


	public int deletebyid(int id) {
		ur.deleteById(id);
		return id;
		
	}


	public void editbyid(int id,String status) {
		// TODO Auto-generated method stub
		Task u=new Task();
//	u.setTaskname(ur.findById(id).get().getTaskname());
//	u.setId(id);
//	u.setStatus("completed");
//	ur.deleteById(id);
//		ur.save(u);
		u=ur.findById(id).get();
		u.setId(id);
		u.setStatus(status);
		ur.save(u);
	}


	
		
	

}
