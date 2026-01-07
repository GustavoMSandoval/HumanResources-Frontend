'use server';

import { Employee } from "@/types/employee";

export async function createEmployee(formData: FormData) {

    const data = {
        CPF: formData.get('cpf'),
        name: formData.get('name'),
        email: formData.get('email'),
        salary: formData.get('salary')
    }

    await fetch('http://localhost:8080/api/employees', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
    
}

export async function editEmployee(formData: FormData) {

    const data = {
        CPF: formData.get('cpf'),
        name: formData.get('name'),
        email: formData.get('email'),
        salary: formData.get('salary')
    }

    await fetch('http://localhost:8080/api/employees', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
    
}