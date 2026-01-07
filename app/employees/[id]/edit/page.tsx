'use client'

import { useEffect, useState } from "react";
import { editEmployee } from "../../actions";
import { Employee } from "@/types/employee";
import { useParams } from "next/navigation";

export default function Edit() {

  
    const {id} = useParams<{id: string}>();
    const [form, setForm] = useState<Employee | null>(null);

    useEffect(() => {
      async function load() {
          try {
          const res = await fetch(`http://localhost:8080/api/employees/${id}`, {
            cache: 'no-store'
          });
          const data: Employee = await res.json();

          setForm(data)

          } catch(e) {
            console.log("User not found!")
          }
        }
        load();
      }, [id]);

      function handleChange(
        e: React.ChangeEvent<HTMLInputElement>
      ) {
        if (!form) return;

        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      }

  if (!form) return <p>Carregando...</p>;


  return (
    <>
        <div className="max-w-md mx-auto flex flex-col justify-center h-screen">
            <h2 className="mb-8 text-center text-xl font-semibold text-primary">Editar funcionário</h2>
            <form action={editEmployee} className="flex flex-col border rounded-2xl border-gray-400 bg-gray-50 p-5">
                <div className="relative z-0 w-full mb-5 group">
                    <div id="floating_cpf" className="input-primary">{form?.CPF}</div>
                    <label htmlFor="floating_cpf" className="text-primary absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">CPF:</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input id="floating_email" className="input-primary" placeholder=" " value={form?.email} onChange={handleChange} name="email" type="text" />
                    <label htmlFor="floating_email" className="text-primary absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email:</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <div id="floating_name" className="input-primary">{form?.name}</div>
                    <label htmlFor="floating_name" className="text-primary absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nome:</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input id="floating_salary" className="input-primary peer" placeholder=" " value={form?.salary} onChange={handleChange} name="salary" type="number" step={2} />
                    <label htmlFor="floating_salary" className="text-primary absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Salário:</label>
                </div>
                <input name="id" type="hidden" value={form?.id}/>
                
                <input className="btn-primary" type="submit" value="Enviar"/>
            </form>
        </div>
    </>
  )
}
