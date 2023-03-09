import {FormEvent} from 'react';

interface ButtonProps {
    onClick?:() => void;
    className?:string | null;
    children?:React.ReactNode;
    variant?:'primary'|'outline';
    btnType?:'button'|'submit'|'reset';
}

const Button = ({onClick,className,children,btnType,variant}:ButtonProps) => {
  const btnClass = variant==='outline'?'bg-inputbg border border-borderColor text-black':'bg-secodaryBlue text-white';
  
  return (
        <button type={btnType??'button'} onClick={onClick}  className={`w-max md:min-w-148  active:bg-sky-600 rounded cursor-pointer py-3.5 px-7 text-xs md:text-base text-center ${btnClass} ${className} `}>
            {children}
        </button>
  )
}

export default Button

