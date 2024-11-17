import React from 'react';
import { CheckboxField } from '../CheckboxField/CheckboxField';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { InputFormRegister } from '../InputFormRegister/InputFormRegister';
import Button from '../Button/Button';
import { useAuth } from '../../contexts/UseAuth';

interface FormRegisterProps {
    // Add any props if needed
}

type RegisterFormInputs = {
    fullName: string;
    username: string;
    email: string;
    password: string;
    
    // passe todos campos aqui obrigatórios e não obrigatórios
}

export const FormRegister: React.FC<FormRegisterProps> = () => {
    const { registerUser } = useAuth();

    const personalFields = [
        { label: 'Nome completo', name: 'fullName', placeholder: 'Digite seu nome completo', required: true },
        { label: 'Sexo', name: 'gender', type: 'select', options: ['Prefiro não informar', 'Maculino', 'Feminino'] },
        { label: 'Tipo de curso', type: 'select', name: 'courseType', options: ['Ensino médio', 'Técnico', 'Graduação', 'Pós-graduação', 'Mestrado', 'Doutorado', 'Pós doutorado'], required: true },
        { label: 'Curso', name: 'educationArea', placeholder: 'Digite o nome do curso', required: true },
        { label: 'Situação atual do curso', type: 'select', name: 'courseStatus', options: ['Em andamento', 'Concluído', 'Incompleto'], required: true },
        { label: 'Instituição de ensino', name: 'educationInstitution', placeholder: 'Digite o nome da instituição', fullWidth: true },
        { label: 'Área de pesquisa', name: 'researchArea', placeholder: 'Digite a sua área de pesquisa', fullWidth: true },
        { label: 'Cargo profissional', name: 'jobPosition', placeholder: 'Digite seu cargo profissional' },
        { label: 'Função na instituição', name: 'institutionRole', placeholder: 'Digite sua função na instituição' },
        { label: 'Número de celular', name: 'phone', placeholder: 'Digite seu número de celular', type: 'number' },
    ];

    const emailFields = [
        { label: 'E-mail', type: 'email', name: 'email', placeholder: 'Digite seu e-mail', required: true },
        { label: 'Confirmação de e-mail', name: 'confirmEmail', placeholder: 'Confirme seu e-mail' },
    ];

    const registrationFields = [
        { label: 'Nome de usuário', name: 'username', hint: 'Favor não utilizar espaços, acentos ou caracteres especiais.', required: true, placeholder: 'Digite seu nome de usuário' },
        { label: 'Senha', name: 'password', type: 'password', required: true, placeholder: 'Digite sua senha' },
        { label: 'Confirmação de senha', name: 'confirmPassword', type: 'password', required: true, placeholder: 'Confirme sua senha' },
    ];

    const handleRegister = (form: RegisterFormInputs) => {
        registerUser(form.email, form.username, form.password);
    }

    return (
        <form className="flex flex-col px-1.5">
            <SectionTitle title="Dados pessoais" />
            <div className="flex flex-wrap mt-8 max-md:mr-0">
                {personalFields.map((field) => (
                    <InputFormRegister
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        options={field.options}
                        placeholder={field.placeholder}
                        fullWidth={field.fullWidth}
                        required={field.required}
                    />
                ))}
            </div>

            <SectionTitle title="Dados cadastrais" />
            <div className="flex mt-8 max-md:mr-0 ">
                <div className="flex flex-wrap flex-row pr-1 pl-1.5 min-w-[240px] max-w-full">
                    {emailFields.map((field) => (
                        <InputFormRegister
                            key={field.name}
                            label={field.label}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            required={field.required}
                        />
                    ))}
                    {registrationFields.map((field) => (
                        <InputFormRegister
                            key={field.name}
                            label={field.label}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            required={field.required}
                        />
                    ))}
                </div>
            </div>

            <SectionTitle title="Dados institucionais" />
            <div className="flex flex-wrap justify-center mt-8 w-full max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink justify-center pb-4 basis-0 max-w-[1230px] min-w-[240px] max-md:max-w-full">
                    <div className="flex flex-col items-start px-1.5 w-full max-w-[1230px] min-h-[56px] max-md:max-w-full">
                        <div className="text-base text-red-600">
                            <span className="text-red-600">* </span>
                            <span className="text-neutral-800">Relação com a instituição</span>
                        </div>
                        <div className="flex mt-2 text-base leading-6 min-h-[24px] text-neutral-800">
                            <CheckboxField label="Possuo vínculo com a instituição" value="possuoVinculoInstituicao" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 shrink justify-center pb-4 text-base leading-6 basis-0 max-w-[1230px] min-w-[240px] text-neutral-800 max-md:max-w-full">
                    <div className="flex flex-col items-start px-1.5 pt-6 pb-2 w-full max-w-[1230px] min-h-[56px] max-md:max-w-full">
                        <div className="flex mt-2 text-base leading-6 min-h-[24px] text-neutral-800">
                            <CheckboxField label="Não possuo vínculo com a instituição" value="naoPossuoVinculoInstituicao" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-8 my-5 mx-auto">
                    <Button variant={5}>Confirmar</Button>
                    <Button variant={5}>Cancelar</Button>
                </div>
        </form>
    );
};