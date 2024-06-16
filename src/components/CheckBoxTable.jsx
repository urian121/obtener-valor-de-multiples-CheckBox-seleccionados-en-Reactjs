import { useState } from "react";

function CheckBoxTable() {
  // Simulación de registros
  const registros = [
    { id: 1, nombre: "Registro 1" },
    { id: 2, nombre: "Registro 2" },
    { id: 3, nombre: "Registro 3" },
    { id: 4, nombre: "Registro 4" },
    { id: 5, nombre: "Registro 5" },
  ];

  // Estado para mantener los registros seleccionados
  const [registrosSeleccionados, setRegistrosSeleccionados] = useState([]);

  // Función para manejar el cambio de selección de un registro
  const handleCheckboxChange = (registroId) => {
    if (registrosSeleccionados.includes(registroId)) {
      // Si el registro ya está seleccionado, lo eliminamos
      setRegistrosSeleccionados(registrosSeleccionados.filter((id) => id !== registroId));
    } else {
      // Si el registro no está seleccionado, lo agregamos
      setRegistrosSeleccionados([...registrosSeleccionados, registroId]);
    }
  };

  // Función para marcar o desmarcar todos los checkboxes
  const handleMarcarDesmarcarTodos = () => {
    // Si hay checkboxes seleccionados, desmarcar todos; de lo contrario, marcar todos
    if (registrosSeleccionados.length > 0) {
      setRegistrosSeleccionados([]);
    } else {
      const todosLosIds = registros.map((registro) => registro.id);
      setRegistrosSeleccionados(todosLosIds);
    }
  };

  return (
    <div>
      <h2>Como obtener valor de multiples CheckBox seleccionados en React.js</h2>
      {/* Botón para marcar/desmarcar todos los checkboxes */}
      <button onClick={handleMarcarDesmarcarTodos}>
        {registrosSeleccionados.length > 0 ? "Desmarcar Todos" : "Marcar Todos"}
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((registro) => (
            <tr key={registro.id}>
              <td>{registro.id}</td>
              <td>{registro.nombre}</td>
              <td>
                <input
                  type="checkbox"
                  checked={registrosSeleccionados.includes(registro.id)}
                  onChange={() => handleCheckboxChange(registro.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Registros seleccionados: {registrosSeleccionados.join(", ")}</p>
    </div>
  );
}

export default CheckBoxTable;
