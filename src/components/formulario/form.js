import { useState } from "react";
import SectionForm from "./sectionForm";

export default function Form() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  function handleChange(e) {
    const newName = e.target.value;
    setName(newName);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name == "") {
      alert("Escriba un nombre");
    } else if (students.find((student) => student.name === name)) {
      alert("El nombre ya esta en la lista de estudiantes");
    } else {
      const newStudent = {
        id: crypto.randomUUID(),
        name: name,
        approved: false,
      };

      setStudents([...students, newStudent]);
      setName("");
    }
  }


  function handleUpdate(id, name) {
    if (students.find((student) => student.name === name)) {
      alert("Ese nombre ya existe!");
    } else {
      const copyStudents = [...students];
      const item = copyStudents.find((item) => item.id === id); //Encontrar elemento
      item.name = name;
      setStudents(copyStudents);
    }
  }

  function handleDelete(id) {
    const tempStudents = students.filter((item) => item.id !== id);
    setStudents(tempStudents);
  }

  return (
    <div className="divForm">
      <h2>Lista estudiantes</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="principalInput"
          onChange={handleChange}
          value={name}
        />
        <button
          className="principalButton"
          type="submit"
          onClick={handleSubmit}
        >
          Agregar
        </button>
      </form>
      <div>
        {students.map((i) => (
          <SectionForm
            key={i.id}
            i={i}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
