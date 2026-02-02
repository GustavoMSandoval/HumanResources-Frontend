'use client'

import { Employee } from "@/types/employee";
import { useEffect, useState } from "react";

export default function Home() {

  const [employees, setEmployees] = useState<Employee[]>([]);

  try {
    useEffect(() => {
      async function load() {
        const res = await fetch('http://localhost:8080/api/employees', {
          cache: 'no-store'
        });
        setEmployees(await res.json());
      }
  
      load();
    }, []);
  } catch(e) {
    console.log("Unable to fetch employees")
  }

  async function handleDelete(id: number) {

    const res = await fetch(`http://localhost:8080/api/employees/${id}`, {
      method: 'DELETE'
    });

    setEmployees(prev => prev.filter(e => e.id !== id));

  }

  
  return (
    <div className="flex flex-col m-auto justify-center items-center h-screen w-5xl">
      <div className="mb-8 self-end">
        <a href="/employees" className="btn-primary">Adicionar</a>
      </div>
      <div className="overflow-auto rounded-lg shadow-xs">
        {employees.length > 0 ?
        <table className="table-auto border-spacing-4">
        <thead className="bg-gray-50 border-b-2 border-gray-100">
          <tr>
            <th className="p-3 text-md font-semibold tracking-wide">Departamento</th>
            <th className="p-3 text-md font-semibold tracking-wide">CPF</th>
            <th className="p-3 text-md font-semibold tracking-wide">Email</th>
            <th className="p-3 text-md font-semibold tracking-wide">Nome</th>
            <th className="p-3 text-md font-semibold tracking-wide">Salário R$</th>
            <th className="p-3 text-md font-semibold tracking-wide">Ações</th>
          </tr>
        </thead>
        <tbody>
          {employees.map( (employee, id) => (
          <tr key={id} className="border-b border-gray-100">
            <td className="p-3 text-md text-left">{employee.department}</td>
            <td className="p-3 text-md text-left">{employee.CPF}</td>
            <td className="p-3 text-md text-left">{employee.email}</td>
            <td className="p-3 text-md text-left">{employee.name}</td>
            <td className="p-3 text-md text-left">{employee.salary}</td>
            <td className="tracking-wide p-3 text-md flex items-center gap-2">
              <a href={`/employees/${employee.id}/edit`} className="text-primary">Editar</a>
              <button onClick={() => handleDelete(employee.id)} type="submit" className="text-red-500 cursor-pointer">Deletar</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
        : <p>Nenhum funcionário encontrado</p>}
      </div>
      
    </div>
  );
}
