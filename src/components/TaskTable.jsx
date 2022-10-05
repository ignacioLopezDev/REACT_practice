import { TaskRow } from "./TaskRow";

// showcompleted es un prop que define true, si no lo pasan incialmente, lo define en false
// al primer Tasktable no le paso showcompleted, por eso lo define false. Ahi hace el juego 
export const TaskTable = ({ tasks, toggleTask, showCompleted=false }) => {

  /* 11 - mapeo las tareas */
  const mapeoTasks = (showCompleted) => {

    return (
      tasks
        // filtro solo las done showCompleted
        .filter(t => t.done === showCompleted)
        // mapeo y enlisto en el componente TaskRow
        .map((task) => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
    )));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {mapeoTasks(showCompleted)}
      </tbody>
    </table>
  );
};
