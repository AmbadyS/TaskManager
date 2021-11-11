package com.task.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.task.entity.Task;
import com.task.services.TaskSer;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class TaskController {
	@Autowired
	TaskSer us;
	@RequestMapping(value= "/get",method =RequestMethod.POST)
	public Task gettask(@RequestBody Task u) {
	us.saveall(u);	
	return u;
}
	@RequestMapping(value="/getall",method = RequestMethod.GET)
	public List<Task> getalltasks(){
		return us.getall();
	}
	@RequestMapping(value= "delete/{id}",method= RequestMethod.GET)
	
	public String deleteall(@PathVariable("id") int id) {
		us.deletebyid(id);
		return "success";
		
	}
	@PutMapping (value="edit/{status}/{id}")
	public String updatedall(@PathVariable("id") int id,@PathVariable("status") String status) {
		
		us.editbyid(id,status);
	
		return "success";
		
	}

}
