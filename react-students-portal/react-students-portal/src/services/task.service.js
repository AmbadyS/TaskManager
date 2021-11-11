import http from "../http-common";

class TaskService {
  getAll() {
    return http.get(`/getall`);
  }
  
  create(data) {
    return http.post("/get", data);
  }

  update(id,status) {
    return http.put(`/edit/${status}/${id}`);
  }

  delete(id) {
    return http.get(`/delete/${id}`);
  }

}

export default new TaskService();