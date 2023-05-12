import { useState } from "react";
import "./student.css";

export default function SectionForm({ i, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function EditForm() {

    const [newName, setNewName] = useState(i.name);
    function handleSubmit(e) {
      e.preventDefault();

    }

    function handleChange(e) {
      const value = e.target.value;
      setNewName(value);
    }
    
    function handleClickUpdate(){
        onUpdate(i.id, newName);
        setIsEdit(false);

    }

    return (
      <form className="createList" onSubmit={handleSubmit}>
        <input className="sectionInput" type="text" onChange={handleChange} value={newName} />
        <button className="buttonSection blue" type="submit" onClick={handleClickUpdate}>Actualizar</button>
      </form>
    );
  }

  function SectionDefault() {
    return (
      <div className="createList">
        <span className="sectionInput">{i.name}</span>
        <button className="buttonSection blue" 
          onClick={() => {
            setIsEdit(true);
          }}
        >
          Editar
        </button>
        <button  className="buttonSection red" onClick={(e) => onDelete(i.id)}>Eliminar</button>
      </div>
    );
  }

  return <div>{isEdit ? <EditForm /> : <SectionDefault />}</div>;
}
