import TagButton from '../TagButton/TagButton';
import ButtonSystem from '../ButtonSystem/ButtonSystem';
import Cardinformativo from '../CardInformativo/CardInformativo';
import CapesLabButton from '../CapesLabButton/CapesLabButton';

interface InformativoData {
    imageUrl: string;
    title: string;
    description: string;
    date: string;
}

const informativosData: InformativoData[] = [
    {
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/939f33371913f07622d7fe932cc97a2122d1360e4b29c2d439a0d2a18c11a3b9?placeholderIfAbsent=true&apiKey=1d7001106e63438f848480d72e37795d",
        title: "Análise Textual, Design e Questões de Gênero são temas de cursos",
        description: "Treinamento será nos dias 6, 14 e 18 de novembro ...",
        date: "05/11/2024"
    },
    {
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/80d856cfa072ddd4d078d846db67f26dfdd44ad75002c6430ff1abeb5c9a6057?placeholderIfAbsent=true&apiKey=1d7001106e63438f848480d72e37795d",
        title: "Cerimônia de premiação para mulheres ocorre na quarta-feira",
        description: "Solenidade terá início às 14h e será realizada no auditório da CAPES, com transmissão ao vivo ...",
        date: "05/11/2024"
    },
    {
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f7ffe408319a57988bd4d027f0c6eff095a98e91490e09987cd52a5e670b6907?placeholderIfAbsent=true&apiKey=1d7001106e63438f848480d72e37795d",
        title: "Premiação reconhece pesquisadoras de todo o Brasil",
        description: "As 15 cientistas selecionadas foram destaque nas áreas de Exatas, Médicas e Humanas ...",
        date: "29/10/2024"
    }
];

const InformativoSection = () => {
    const tags: string[] = [
        "Neurociência", "Sustentabilidade", "Inteligência Artificial na Educação",
        "Desenvolvimento Infantil", "Psicologia Educacional", "Tecnologias Assistivas",
        "Matemática Aplicada", "Fisiologia Humana", "Criatividade em Negócios",
        "Alfabetização Adulta", "Saúde Escolar", "Educação STEM"
    ];

    return (
        <div className='bg-[#1C1C5E] w-full pt-[70px] pb-[100px]'>
            <div className='max-w-screen-xl mx-auto px-2'>
                <div className="flex w-full justify-between">
                    <h2 className='border-b border-solid border-b-orange-500 pb-[16.19px] text-[22px] font-semibold text-[#FAFAFA]'>
                        Informativos
                    </h2>
                    <ButtonSystem variant={4} className='text-lg hover:text-white'>Conheça o Acervo</ButtonSystem>
                </div>
                <div className="flex mt-6 mb-20 gap-8 flex-wrap px-8">
                    {informativosData.map((informativo, index) => (
                        <Cardinformativo key={index} {...informativo} />
                    ))}
                </div>
                {[0, 1, 2].map((rowIndex) => (
                    <div
                        key={rowIndex}
                        className="flex flex-wrap gap-2 justify-center items-start w-full h-[35px] max-md:max-w-full mt-4"
                    >
                        {tags.slice(rowIndex * 5, (rowIndex + 1) * 5).map((tag, index) => (
                            <TagButton key={index} label={tag} />
                        ))}
                    </div>
                ))}
                <div className="mt-[35px] flex justify-center">
                <CapesLabButton variant={2} className='h-[48px] text-sm' />
                </div>
            </div>
        </div>
    );
}

export default InformativoSection;
