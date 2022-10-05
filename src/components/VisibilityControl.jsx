export const VisibilityControl = ({
  setShowCompleted,
  cleanTask,
  isChecked,
}) => {
  const handleDelete = () => {
    if (window.confirm("¿Está seguro que quiere eliminar?")) cleanTask();
    setShowCompleted(false);
  };

  return (
    <div className="d-flex justify-content-between">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
      </div>
      <label> Show Task Done</label>
      <button 
      className="btn btn-warning btn-sm"
      onClick={handleDelete}>Clear</button>
    </div>
  );
};
