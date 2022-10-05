// Toda las estructura de formulario, englobada en el mapeo

export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
         className="form-check-input"
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
