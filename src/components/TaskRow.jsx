// Toda las estructura de formulario, englobada en el mapeo

export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td>
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => {
            // Funcion toogleTask 3/3 -ejecuto el proptoggleTask, el parametro task lo encuentra porque se está mapeando
            toggleTask(task);
          }}
        />
      </td>
    </tr>
  );
};
