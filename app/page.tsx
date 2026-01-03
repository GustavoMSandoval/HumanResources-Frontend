import { Employee } from "@/types/employee";

export default async function Home() {

  let employees: Employee[];

  try {
    const res = await fetch('http://localhost:8080/api/employees', {
      cache: 'no-store'
    });

    employees = await res.json();
  } catch (e) {
    employees = []
    console.log(e)
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
            <th className="p-3 text-md font-semibold tracking-wide">CPF</th>
            <th className="p-3 text-md font-semibold tracking-wide">Email</th>
            <th className="p-3 text-md font-semibold tracking-wide">Nome</th>
            <th className="p-3 text-md font-semibold tracking-wide">Salário R$</th>
            <th className="p-3 text-md font-semibold tracking-wide">Ações</th>
          </tr>
        </thead>
        <tbody>
          {employees.map( employee => (
          <tr key={employee.id} className="border-b border-gray-100">
            <td className="p-3 text-md text-left">{employee.CPF}</td>
            <td className="p-3 text-md text-left">{employee.email}</td>
            <td className="p-3 text-md text-left">{employee.name}</td>
            <td className="p-3 text-md text-left">{employee.salary}</td>
            <td className="tracking-wide p-3 text-md flex items-center gap-2">
              <a href={`/employees/${employee.id}/edit`} className="text-primary">Editar</a>
              <a href="#" className="text-red-500">Deletar</a>
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
