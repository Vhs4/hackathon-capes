import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import Button from '../Button/Button';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/UseAuth';

// Esquema de validação com Zod
const loginSchema = z.object({
    username: z.string().min(1, 'O nome de usuário é obrigatório').max(50, 'Máximo de 50 caracteres'),
    password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres')
});

const FormLogin = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const { loginUser } = useAuth();
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const result = loginSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            result.error.errors.forEach((err) => {
                if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
            });

            setErrors(fieldErrors);
            toast.error('Ocorreu um erro, tente novamente!');
        } else {
            toast.success("Login efetuado com sucesso!");
            loginUser(result.data.username, result.data.password);
            navigate('/home');
            setErrors({});
        }
    };

    return (
        <main className="flex flex-col bg-white items-center justify-center mx-auto my-8">
            <h1 className="w-full text-xl leading-6 whitespace-nowrap text-neutral-800">Entrar</h1>
            <form className="flex flex-col justify-center mt-6 w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col px-1.5 w-full max-w-[270px] min-h-[54px]">
                    <div className="flex relative flex-col w-full">
                        <label htmlFor="username" className="sr-only">
                            Nome de usuário
                        </label>
                        <input
                            id="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            placeholder="Nome de usuário"
                            className="flex overflow-hidden z-0 flex-col justify-center py-2.5 pr-3 pl-8 w-full text-base bg-blue-100 min-h-[38px] text-neutral-500"
                        />
                        <div className="absolute p-3 text-base font-black leading-4 whitespace-nowrap text-blue-950 w-[34px]">
                            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 8.31006C4.78125 8.31006 3 6.52881 3 4.31006C3 2.12256 4.78125 0.310059 7 0.310059C9.1875 0.310059 11 2.12256 11 4.31006C11 6.52881 9.1875 8.31006 7 8.31006ZM9.78125 9.31006C12.0938 9.31006 14 11.2163 14 13.5288V14.8101C14 15.6538 13.3125 16.3101 12.5 16.3101H1.5C0.65625 16.3101 0 15.6538 0 14.8101V13.5288C0 11.2163 1.875 9.31006 4.1875 9.31006H4.71875C5.40625 9.65381 6.1875 9.81006 7 9.81006C7.8125 9.81006 8.5625 9.65381 9.25 9.31006H9.78125Z" fill="#1C1C5E" />
                            </svg>
                        </div>
                        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                    </div>
                </div>
                <div className="flex flex-col px-1.5 w-full max-w-[270px] min-h-[54px]">
                    <div className="flex relative flex-col w-full">
                        <label htmlFor="password" className="sr-only">
                            Senha
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Insira sua senha"
                            className="flex overflow-hidden z-0 flex-col justify-center py-2.5 pr-3 pl-8 w-full text-base bg-blue-100 min-h-[38px] text-neutral-500"
                        />
                        <div className="absolute p-3 text-base font-black leading-4 whitespace-nowrap text-blue-950 w-[34px]">
                            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 7.31006C13.3125 7.31006 14 7.99756 14 8.81006V14.8101C14 15.6538 13.3125 16.3101 12.5 16.3101H1.5C0.65625 16.3101 0 15.6538 0 14.8101V8.81006C0 7.99756 0.65625 7.31006 1.5 7.31006H2.25V5.06006C2.25 2.46631 4.375 0.310059 7 0.310059C9.59375 0.310059 11.75 2.46631 11.75 5.06006V7.31006H12.5ZM9.25 7.31006V5.06006C9.25 3.84131 8.21875 2.81006 7 2.81006C5.75 2.81006 4.75 3.84131 4.75 5.06006V7.31006H9.25Z" fill="#1C1C5E" />
                            </svg>

                        </div>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                </div>
                <div className="flex flex-col justify-center pb-4 w-full text-sm leading-5 max-w-[270px] min-h-[40px] text-blue-950">
                    <Link to="#" className="px-1.5 py-1">
                        Esqueci minha senha
                    </Link>
                </div>
                <div className="flex flex-col items-start px-1.5 w-full text-sm leading-5 max-w-[270px]">
                    <Button variant={4} type="submit">
                        Entrar
                    </Button>
                    <div className="flex items-start mt-3.5">
                        <p className="text-neutral-800">Não possui acesso?{" "}
                        <Link to="/register" className="whitespace-nowrap text-blue-950">
                             Registre-se
                        </Link>
                        </p>
                    </div>
                </div>
            </form>
        </main>
    );
};

export default FormLogin;
