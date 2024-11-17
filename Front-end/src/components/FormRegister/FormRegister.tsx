import React, { useState } from 'react';
import { z } from 'zod';
import { CheckboxField } from '../CheckboxField/CheckboxField';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { InputFormRegister } from '../InputFormRegister/InputFormRegister';
import Button from '../Button/Button';
import { toast } from 'react-toastify';
import { createUserAPI } from '../../services/api';
import { useAuth } from '@/contexts/UseAuth';


const formSchema = z.object({
    name: z.string().min(1),
    gender: z.enum(["Prefiro não informar", "Masculino", "Feminino"]), // Prefiro não informar: 0, Masculino: 1, Feminino: 2
    courseType: z.enum(["0", "1", "2", "3", "4", "5", "6", "7"]).transform(value => parseInt(value)), 
    course: z.string().min(1),
    courseStatus: z.enum(["0", "1", "2"]).transform(value => parseInt(value)),
    schoolOrCollege: z.string().optional(),
    researchArea: z.string().optional(),
    currentProfession: z.string().optional(),
    institutionRole: z.string().optional(),
    phoneNumber: z.string().optional(),
    email: z.string().email("E-mail inválido"),
    confirmEmail: z.string().email("E-mail inválido"),
    username: z.string().min(1),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    possuoVinculoInstituicao: z.boolean().optional(),
    naoPossuoVinculoInstituicao: z.boolean().optional(),
}).refine((data) => data.email === data.confirmEmail, {
    message: "Os e-mails não coincidem",
    path: ["confirmEmail"],
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
});

type FormSchema = z.infer<typeof formSchema>;

export default function FormRegister() {
    const [formData, setFormData] = useState<FormSchema>({} as FormSchema);
    const [errors, setErrors] = useState<z.ZodIssue[]>([]);
    const { registerUser } = useAuth();

    enum Gender {
        PreferNotToSay = "Prefiro não informar",
        Male = "Masculino",
        Female = "Feminino"
    }

    enum CourseType {
        HighSchool = "1",
        Technical = "2",
        Undergraduate = "3",
        Postgraduate = "4",
        Masters = "5",
        Doctorate = "6",
        PostDoctorate = "7"
    }

    enum CourseStatus {
        InProgress = "0",
        Completed = "1",
        Incomplete = "2"
    }

    const personalFields = [
        { label: 'Nome completo', name: 'name', placeholder: 'Digite seu nome completo', required: true },
        { 
            label: 'Sexo', 
            name: 'gender', 
            type: 'select', 
            options: [
                { label: 'Prefiro não informar', value: Gender.PreferNotToSay },
                { label: 'Masculino', value: Gender.Male },
                { label: 'Feminino', value: Gender.Female }
            ],
            required: true 
        },
        { 
            label: 'Tipo de curso', 
            name: 'courseType', 
            type: 'select', 
            options: [
                { label: 'Ensino médio', value: CourseType.HighSchool },
                { label: 'Técnico', value: CourseType.Technical },
                { label: 'Graduação', value: CourseType.Undergraduate },
                { label: 'Pós-graduação', value: CourseType.Postgraduate },
                { label: 'Mestrado', value: CourseType.Masters },
                { label: 'Doutorado', value: CourseType.Doctorate },
                { label: 'Pós doutorado', value: CourseType.PostDoctorate }
            ],
            required: true 
        },
        { label: 'Curso', name: 'course', placeholder: 'Digite o nome do curso', required: true },
        { 
            label: 'Situação atual do curso', 
            type: 'select', 
            name: 'courseStatus', 
            options: [
                { label: 'Selecione', value: '' },
                { label: 'Em andamento', value: CourseStatus.InProgress },
                { label: 'Concluído', value: CourseStatus.Completed },
                { label: 'Incompleto', value: CourseStatus.Incomplete }
            ], 
            required: true 
        },
        { label: 'Instituição de ensino', name: 'schoolOrCollege', placeholder: 'Digite o nome da instituição', fullWidth: true },
        { label: 'Área de pesquisa', name: 'researchArea', placeholder: 'Digite a sua área de pesquisa', fullWidth: true },
        { label: 'Cargo profissional', name: 'currentProfession', placeholder: 'Digite seu cargo profissional' },
        { label: 'Função na instituição', name: 'institutionRole', placeholder: 'Digite sua função na instituição' },
        { label: 'Número de celular', name: 'phoneNumber', placeholder: 'Digite seu número de celular', type: 'tel' },
    ];

    const emailFields = [
        { label: 'E-mail', type: 'email', name: 'email', placeholder: 'Digite seu e-mail', required: true },
        { label: 'Confirmação de e-mail', name: 'confirmEmail', placeholder: 'Confirme seu e-mail', type: 'email', required: true },
    ];

    const registrationFields = [
        { label: 'Nome de usuário', name: 'username', hint: 'Favor não utilizar espaços, acentos ou caracteres especiais.', required: true, placeholder: 'Digite seu nome de usuário' },
        { label: 'Senha', name: 'password', type: 'password', required: true, placeholder: 'Digite sua senha' },
        { label: 'Confirmação de senha', name: 'confirmPassword', type: 'password', required: true, placeholder: 'Confirme sua senha' },
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleCheckboxChange = (value: string, checked: boolean) => {
        setFormData(prevData => ({ ...prevData, [value]: checked }));
    };

    const handleRegister = () => {
        const result = formSchema.safeParse(formData);
        if (result.success) {
            toast.success('Cadastro realizado com sucesso!');
            const { confirmEmail, confirmPassword, naoPossuoVinculoInstituicao, possuoVinculoInstituicao, ...data } = result.data;
            createUserAPI(data).then((response) => {
                console.log(response);
            }
            );
registerUser(data.email, data.username, data.password);
            console.log(data);

        } else {
            toast.error('Erro ao realizar o cadastro, verifique os campos!');
            setErrors(result.error.issues);
        }
    };

    const getFieldError = (fieldName: string) => {
        return errors.find(error => error.path[0] === fieldName)?.message;
    };

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
                        onChange={field.type === 'select' ? undefined : handleInputChange}
                        onSelectChange={field.type === 'select' ? handleInputChange : undefined}
                        error={getFieldError(field.name)}
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
                            onChange={field.type === 'select' ? undefined : handleInputChange}
                            onSelectChange={field.type === 'select' ? handleInputChange : undefined}
                            error={getFieldError(field.name)}
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
                            onChange={field.type === 'select' ? undefined : handleInputChange}
                            onSelectChange={field.type === 'select' ? handleInputChange : undefined}
                            error={getFieldError(field.name)}
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
                            <CheckboxField
                                label="Possuo vínculo com a instituição"
                                value="possuoVinculoInstituicao"
                                onChange={(e) => handleCheckboxChange('possuoVinculoInstituicao', e.target.checked)}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 shrink justify-center pb-4 text-base leading-6 basis-0 max-w-[1230px] min-w-[240px] text-neutral-800 max-md:max-w-full">
                    <div className="flex flex-col items-start px-1.5 pt-6 pb-2 w-full max-w-[1230px] min-h-[56px] max-md:max-w-full">
                        <div className="flex mt-2 text-base leading-6 min-h-[24px] text-neutral-800">
                            <CheckboxField
                                label="Não possuo vínculo com a instituição"
                                value="naoPossuoVinculoInstituicao"
                                onChange={(e) => handleCheckboxChange('naoPossuoVinculoInstituicao', e.target.checked)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-8 my-5 mx-auto">
                <Button variant={5} onClick={handleRegister}>Confirmar</Button>
                <Button variant={5} onClick={() => console.log("Formulário cancelado")}>Cancelar</Button>
            </div>
        </form>
    );
}