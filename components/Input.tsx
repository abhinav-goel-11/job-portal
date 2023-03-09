import {ChangeEvent} from 'react';
import {FocusEvent} from 'react';

interface Inputprops {
    className:string|null;
    placeholder:string;
    name:string;
    inputValue?:string;
    inputType:string;
    children:React.ReactNode;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
    onBlur?:(e: FocusEvent<any, Element>)=> void;
}


const Input = ({className,placeholder,name,inputType,children,inputValue,onChange,onBlur}:Inputprops) => {



  return (
    <div className="mt-5 w-full">

        <label className="text-secondary text-sm">{children}</label>
        <input className={`mt-2 border active:border-opacity-5 outline-0 border-borderColor focus:border-secodaryBlue bg-inputbg rounded-md py-4 pl-4 w-full ${className}`} placeholder={placeholder}  value={inputValue} name={name} type={inputType} onChange={onChange} onBlur={onBlur}/>
    </div>
  )
}

export default Input