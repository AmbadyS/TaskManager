import React, { Component } from "react";
import TaskService from "../services/task.service";
import { Route} from "react-router-dom";
import taskService from "../services/task.service";

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.onChangeTaskName = this.onChangeTaskName.bind(this);

    this.formIsValid = false;



    this.saveTask = this.saveTask.bind(this);
   
   
  this.listforcount=[]
    this.state = {
      id: 0,
      taskname: "",
      status:"notcompleted"
      , errors: {},
      lists: []
    };
  }

  componentDidMount() {
    this.retrieveTasks();
  }



  retrieveTasks() {
    taskService.getAll()
      .then(response => {
        this.setState({
          lists: response.data
        });
        this.listforcount= response.data;
        console.log(response.data);
      })
      
  }
  onChangeTaskName(e) {
    this.setState({
      taskname: e.target.value,
      id:this.listforcount.length+1,
      status:"notcompleted"
    });
  }
  delete(id){
   
    TaskService.delete(id)
    .then(response => {

    alert("Deleted Successfully")

     this.retrieveTasks()
    })
  }
  update(id,status){
   status=status==='completed'?'notcompleted':'completed';
  
    TaskService.update(id,status)
    .then(response => {


   
     this.retrieveTasks()
    })
  }
 
  handleValidation(){
    let errors = {};
    this.formIsValid = true;

    //name
    if(this.state.taskname===""){
      this.formIsValid = false;
       errors["taskname"] = "*";
    }
  
   this.setState({errors: errors});
   return this.formIsValid;
}
  
saveTask() {
  this.handleValidation();
  if(this.formIsValid)
  {
 

  TaskService.create( this.state)
    .then(response => {

    alert("Save Successfully")

     this.retrieveTasks()
     window.location.reload()
    })
  }
  else
  {
    alert("Error")
    
  }
 
  }

 

  render() {  const { lists } = this.state;
        return (
  

            <div className="todo-content">
            <h1 className="page-title"> My Task </h1>
            
            <div class="todo-create">
                <form action="#">
                    <input type="text" id="taskname" 
                  onChange={this.onChangeTaskName}       placeholder="Input task name then tap Enter to add"/>
                         
                             <span onClick={this.saveTask} class="addBtn">+ADD</span>
                </form>
            </div>
    <br/>
           
<ul id="myUL">
  {lists &&
              lists.map((lists, index) => (  lists.status==='completed' ?<li className="checked"><a  onClick={this.update.bind(this, lists.id,lists.status)}>{lists.taskname}</a><span class="close" onClick={this.delete.bind(this, lists.id)} >×</span>
          </li>:<li onClick={this.update.bind(this, lists.id)}>  {lists.taskname}<span class="close" onClick={this.delete.bind(this, lists.id)}>×</span>
          </li>))}
  
</ul>
</div>

  );
  }

}