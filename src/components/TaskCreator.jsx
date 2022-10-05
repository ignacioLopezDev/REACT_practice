import { useState } from "react";

// 5 2/3 - traigo al primer prop desde la otra solapa
export const TaskCreator = ({ primerProp }) => {

  // useState - Task
  // 1- Creo estado newTaskName, solo va a capturar la nueva tarea
  const [newTaskName, setNewTaskName] = useState();

  // handleChange
  // 2- creo un handleChange y guardo el e.target.value en el setNewTaskName
  const handleChange = (e) => {
    setNewTaskName(e.target.value);
  };

  // handleSubmit
  // 5 1/3- creo handleSubmit que ejecuta la funcion primerProp con el newTaskName como parametro
  const handleSubmit = (e) => {
    e.preventDefault();
    primerProp(newTaskName);
    setNewTaskName("");
  };

  return (
    // 4 -cuando Submiteo ejecuto handleSubmit
    <div className="my-3 row ">
      <form onSubmit={handleSubmit} className="d-flex">
        <div className="col-9">
          <input
            className="form-control-sm"
            type="text"
            placeholder="new task"
            value={newTaskName}
            // 3- en el formulario, cuando cambia, ejecuto handleChange
            onChange={handleChange}
          />
        </div>
        <div className="col-3">
          <button className="btn btn-primary btn-sm">Save Task</button>
        </div>
      </form>
    </div>
  );
};
