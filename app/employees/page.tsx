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
                        <input value={cpf} onChange={handleChange} className="input-primary" placeholder="CPF" name="cpf" type="text" min={14} maxLength={14}/>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input className="input-primary" placeholder="Email" name="email" type="text" />
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input className="input-primary" placeholder="Nome" name="name" type="text" />
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input className="input-primary" placeholder="Salário" name="salary" type="number" step={2} />
                    </div>
                    
                    <input className="btn-primary" type="submit" value="Enviar"/>
                </form>
            </div>
        </>
    );
}