import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
}

const Button = ({text, ...rest}: ButtonProps) => {
  return (
    <button className='px-14 py-3 bg-black text-white rounded-md' {...rest}>{text}</button>
  )
}

export default Button