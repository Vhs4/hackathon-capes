import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import XFechar from '@/assets/svgs/XFechar';
import { SelectField } from '@/components/SelectField/SelectField';
import { useAuth } from '@/contexts/UseAuth';
import IconeMicrofone from '@/assets/svgs/IconeMIcrofone';
import Button from '@/components/ButtonSystem/ButtonSystem';
import CapesLabButton from '@/components/CapesLabButton/CapesLabButton';
import SwitchAzul from '@/components/SwitchAzul/SwitchAzul';

const schema = z.object({
    semanticaOtimizada: z.boolean().optional(),
    search: z
        .string()
        .nonempty("O campo de busca não pode estar vazio.")
        .min(3, "Digite pelo menos 3 caracteres para buscar."),
    bases: z.boolean().optional(),
    periodicos: z.boolean().optional(),
    livros: z.boolean().optional(),
    artigos: z.boolean().optional(),
    tipoMaterial: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const SearchComponent = () => {
    const { user } = useAuth();
    const navigate = useNavigate()
    const {
        control,
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            semanticaOtimizada: false,
            search: "",
            bases: false,
            periodicos: false,
            livros: false,
            artigos: false,
            tipoMaterial: "",
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log("Formulário enviado com sucesso:", data);

        const queryParams = new URLSearchParams();
        if (data.search) queryParams.append('search', data.search);
        if (data.semanticaOtimizada) queryParams.append('semanticaOtimizada', String(data.semanticaOtimizada));
        if (data.bases) queryParams.append('bases', String(data.bases));
        if (data.periodicos) queryParams.append('periodicos', String(data.periodicos));
        if (data.livros) queryParams.append('livros', String(data.livros));
        if (data.artigos) queryParams.append('artigos', String(data.artigos));
        if (data.tipoMaterial) queryParams.append('tipoMaterial', data.tipoMaterial);

        navigate(`/search?${queryParams.toString()}`);
    };

    const [isDropdownSearchOpen, setIsDropdownSearchOpen] = useState(false);
    const [isDropdownScopeOpen, setIsDropdownScopeOpen] = useState(false);

    const toggleDropdownSearch = () => {
        setIsDropdownSearchOpen(!isDropdownSearchOpen);
        setIsDropdownScopeOpen(false);
    };

    const toggleDropdownScope = () => {
        setIsDropdownScopeOpen(!isDropdownScopeOpen);
        setIsDropdownSearchOpen(false);
    };

    const closeDropdownSearch = () => {
        setIsDropdownSearchOpen(false);
    };

    const closeDropdownScope = () => {
        setIsDropdownScopeOpen(false);
    };


    return (
        <main className="flex flex-col max-w-screen-mini mini:max-w-screen-mini-max mini-max:max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex overflow-hidden flex-col px-7 pt-3 pb-6 mt-12 w-full bg-white border-b-[3px] border-blue-950 shadow-[0px_3px_5px_rgba(0,0,0,0.15)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
                    <div className="flex whitespace-nowrap">
                        <div className="py-3 pr-3 pl-3 text-3xl font-black leading-8 text-center text-blue-950">
                            <IconeMicrofone />
                        </div>
                        <div className="my-auto text-xl font-bold text-blue-950">
                            Olá, {user?.username || "vamos realizar uma pesquisa?"}
                        </div>
                    </div>
                    <div className="flex gap-3.5 items-center my-auto">
                        <div className="self-stretch my-auto text-sm leading-5 text-blue-950">
                            Semântica otimizada
                        </div>
                        <Controller
                            name="semanticaOtimizada"
                            control={control}
                            render={({ field }) => (
                                <SwitchAzul {...field} isChecked={field.value} onChange={field.onChange} />
                            )}
                        />
                    </div>
                </div>
                <input
                    {...register("search")}
                    className="mt-3.5 text-xl font-bold text-gray-500 w-full max-md:max-w-full outline-none placeholder-gray-400 placeholder-opacity-100 px-4 py-2"
                    placeholder="Digite os termos, descreva, pesquise tópicos acadêmicos e artigos com nossa busca avançada"
                />
                {errors.search && <p className="text-red-600 px-4">{errors.search.message}</p>}
                <div className="flex flex-wrap gap-5 justify-between items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-3.5 items-center mt-2 text-center text-blue-950">
                        <div>
                            <Button variant={2} icon='/imgs/setaexit.png' onClick={toggleDropdownScope}>
                                Defina o escopo de busca
                            </Button>
                            {isDropdownScopeOpen && (
                                <div className="absolute bg-white shadow-lg mt-2 pt-[14px] pb-[20px] px-[15px] w-[316px] border border-gray-200 rounded-md">
                                    <div className="flex flex-col w-full">
                                        <div className="flex justify-end">
                                            <button onClick={closeDropdownScope}><XFechar /></button>
                                        </div>
                                        <div className="mt-1 text-start text-[20px] font-semibold leading-[24px] border-b border-[#F16421] pb-[16px] text-[#212529]">
                                            <p>Selecione seu escopo</p>
                                        </div>
                                        <ul className='mt-[16px] flex flex-col gap-[10px]'>
                                            <li className='flex text-[14px] leading-[21px] font-normal text-[#212529] justify-between pb-[6px] border-b border-[#E0DFE1]'>
                                                <p>Bases</p>
                                                <Controller
                                                    name="bases"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <SwitchAzul {...field} isChecked={field.value} onChange={field.onChange} />
                                                    )}
                                                />
                                            </li>
                                            <li className='flex text-[14px] leading-[21px] font-normal text-[#212529] justify-between pb-[6px] border-b border-[#E0DFE1]'>
                                                <p>Periódicos</p>
                                                <Controller
                                                    name="periodicos"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <SwitchAzul {...field} isChecked={field.value} onChange={field.onChange} />
                                                    )}
                                                />
                                            </li>
                                            <li className='flex text-[14px] leading-[21px] font-normal text-[#212529] justify-between pb-[6px] border-b border-[#E0DFE1]'>
                                                <p>Livros</p>
                                                <Controller
                                                    name="livros"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <SwitchAzul {...field} isChecked={field.value} onChange={field.onChange} />
                                                    )}
                                                />
                                            </li>
                                            <li className='flex text-[14px] leading-[21px] font-normal text-[#212529] justify-between pb-[6px] border-b border-[#E0DFE1]'>
                                                <p>Artigos</p>
                                                <Controller
                                                    name="artigos"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <SwitchAzul {...field} isChecked={field.value} onChange={field.onChange} />
                                                    )}
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>
                            <Button variant={2} icon='/imgs/setaexit.png' onClick={toggleDropdownSearch}>
                                Busca avançada
                            </Button>
                            {isDropdownSearchOpen && (
                                <div className="absolute bg-white shadow-lg mt-2 p-4 w-1/3 border border-gray-200 rounded-md">
                                    <div className="flex flex-col w-full">
                                        <div className="flex justify-end">
                                            <button onClick={closeDropdownSearch}><XFechar /></button>
                                        </div>
                                        <div className="mt-1 text-start text-[20px] font-semibold leading-[24px] border-b border-[#F16421] pb-[16px] text-[#212529]">
                                            <p>Busca avançada</p>
                                        </div>
                                        <div className="mt-[16px]">
                                            <Controller
                                                name="tipoMaterial"
                                                control={control}
                                                render={({ field }) => (
                                                    <SelectField
                                                        {...field}
                                                        options={['Tipo de material', 'Livros', 'Artigos', 'Periódicos', 'Bases']}
                                                    />
                                                )}
                                            />
                                            {errors.tipoMaterial && <p className="text-red-600">{errors.tipoMaterial.message}</p>}
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Button variant={4} type="submit" className="min-w-4 min-h-[48px] h-[48px] rounded hover:bg-[#1C1C5E] text-center flex justify-center items-center">
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="hover:fill-blue-500"
                            >
                                <path
                                    d="M16.2148 14.7007C16.4961 15.0132 16.4961 15.4819 16.1836 15.7632L15.3086 16.6382C15.0273 16.9507 14.5586 16.9507 14.2461 16.6382L11.1523 13.5444C10.9961 13.3882 10.9336 13.2007 10.9336 13.0132V12.4819C9.80859 13.3569 8.43359 13.8569 6.93359 13.8569C3.33984 13.8569 0.433594 10.9507 0.433594 7.35693C0.433594 3.79443 3.33984 0.856934 6.93359 0.856934C10.4961 0.856934 13.4336 3.79443 13.4336 7.35693C13.4336 8.88818 12.9023 10.2632 12.0586 11.3569H12.5586C12.7461 11.3569 12.9336 11.4507 13.0898 11.5757L16.2148 14.7007ZM6.93359 11.3569C9.12109 11.3569 10.9336 9.57568 10.9336 7.35693C10.9336 5.16943 9.12109 3.35693 6.93359 3.35693C4.71484 3.35693 2.93359 5.16943 2.93359 7.35693C2.93359 9.57568 4.71484 11.3569 6.93359 11.3569Z"
                                    fill="white"
                                    className="group-hover:fill-blue-500"
                                />
                            </svg>
                        </Button>
                        <CapesLabButton />
                    </div>
                </div>
            </form>
        </main>
    );
};

export default SearchComponent;
