'use client'

import { useState } from "react";
import { createEmployee } from "./actions";

export default function Create() {

    function applyCpfMask(value: string) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+$/, '$1');
    }

    const [cpf, setCpf] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCpf(applyCpfMask(e.target.value));
    }


    return (
        <>
            <div className="max-w-md mx-auto flex flex-col justify-center h-screen">
                <h2 className="mb-8 text-center text-xl font-semibold text-primary">Adicionar novo funcionário</h2>
                <form action={createEmployee} className="flex flex-col border rounded-2xl border-gray-400 bg-gray-50 p-5">
                    <div className="relative z-0 w-full mb-5 group">
                        <input id="floating_cpf" value={cpf} onChange={handleChange} className="input-primary peer" placeholder=" " name="cpf" type="text" min={14} maxLength={14}/>
                        <label htmlFor="floating_cpf" className="text-primary absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">CPF:</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input id="floating_email" className="input-primary peer" placeholder=" " name="email" type="text" />
                        <label htmlFor="floating_email" className="text-primary absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email:</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input id="floating_name" className="input-primary peer" placeholder=" " name="name" type="text" />
                        <label htmlFor="floating_name" className="text-primary absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nome:</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input id="floating_salary" className="input-primary peer" placeholder=" " name="salary" type="number" step={2} />
                        <label htmlFor="floating_salary" className="text-primary absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Salário:</label>
                    </div>
                    
                    <input className="btn-primary" type="submit" value="Enviar"/>
                </form>
            </div>
        </>
    );
}