import { twMerge } from 'tailwind-merge';
import Button from '../ButtonSystem/ButtonSystem'
import { useNavigate } from 'react-router-dom';

interface CapesLabButtonProps {
  className?: string;
  variant?: 1 | 2;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const CapesLabButton = ({className, variant = 1, onClick}: CapesLabButtonProps): JSX.Element => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/capeslab');
  }
  const baseStyle = variant === 1 ? 'bg-[#1C1C5E] text-white rounded font-semibold' : 'font-semibold bg-white text-[#1C1C5E] rounded hover:bg-white hover:text-[#1C1C5E]';

  const classNames = twMerge(className, baseStyle);

  const imgPath = variant === 1 ? '/imgs/logogpt.png' : '/imgs/logogptpintada.png';
  return (
    <Button variant={4} className={classNames} icon={imgPath} onClick={onClick || handleNavigate}>Iniciar com o CAPESLab</Button>
  )
}

export default CapesLabButton