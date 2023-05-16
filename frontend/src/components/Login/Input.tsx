import { useState, useEffect } from "react";

interface Props {
  name: string;
  title: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isValid: boolean;
  errorMessage: string;
}

const Input = ({
  name,
  title,
  type,
  placeholder,
  value,
  onChange,
  isValid,
  errorMessage,
}: Props) => {
  const [isTouched, setIsTouched] = useState(false);
  const [error, setError] = useState(false);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    setError(false);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  useEffect(() => {
    if (isTouched) {
      const timeout = setTimeout(() => {
        if (!isValid) {
          setError(true);
        }
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isTouched, isValid, value]);

  return (
    
    <div className="flex flex-col justify-center items-center relative mb-4" data-te-input-wrapper-init>
      
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        name={name}
        className="
        peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] 
        leading-[1.6] outline-none transition-all duration-200 ease-linear 
        focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none
         dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        
      />
      <label htmlFor={name} 
      className="p
      ointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]
       text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] 
       peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] 
       motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
        {title}
      </label>
     
      <p className={`text-xs text-red-500 ${error ? "" : "invisible"}`}>
        {errorMessage}
      </p>
    </div>
  );
};

export default Input;
