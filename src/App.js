import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { useState, useEffect } from "react";

export default function App() {
  // useState - show completed
  const [showCompleted, setShowCompleted] = useState(false);

  // useState - listado de Tasks
  // 6 - creo un useState para el listado de tareas
  const [tasks, setTasks] = useState([]);

  // 7 -funcion primer prop, toma el newTask de "TaskCreator" y analiza si incorporarlo a la lista
  const primerProp = (newTaskName) => {
    // busca el newTaskName, si no lo encuentra lo incorpora a tasks
    if (!tasks.find((task) => task.name === newTaskName)) {
      setTasks([...tasks, { name: newTaskName, done: false }]);
    } else {
      alert(`La tarea "${newTaskName}" ya existe`);
    }
  };

  // Funcion toogleTask 1/3 -
  // creo la funcion pasandole task como parametro (el task del mapeo de TaskRow)
  const toggleTask = (task) => {
    // guardo en setTask que si mapeo el listado Task y el nombre coincide con con el task del TaskRow, le pongo el opuesto a su done.
    setTasks(
      tasks.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  // 9- useEffect leer las Tasks de localStorage.getItem
  useEffect(() => {
    // acutia la data leyendo el localStorage parseandolo
    let data = localStorage.getItem("name");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  // 8- useEffect guardar los Tasks en localStorage.setItem
  useEffect(() => {
    // cuando hay un nuevo task lo guarda en el localStorage
    localStorage.setItem("name", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <BrowserRouter>
      <Routes>
        {/* 5 3/3 primer prop funcion de ruta TaskCreator */}
        <Route path="/" element={<TaskCreator primerProp={primerProp} />} />
      </Routes>
      {/* 10 -  exporto los tasks a ruta de tabla */}
      {/* Funcion toogleTask 2/3 - lo paso como prop hasta TaskRow */}
      <TaskTable tasks={tasks} toggleTask={toggleTask} />

      <div>
        <input
          type="checkbox"
          onChange={(e) => setShowCompleted(!showCompleted)}
        />{" "}
        <label> Show Task Done</label>
      </div>
      {showCompleted && (
        <TaskTable
          tasks={tasks}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
        />
      )}
    </BrowserRouter>
  );
}
