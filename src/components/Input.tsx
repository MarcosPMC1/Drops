import { InputHTMLAttributes, useState } from 'react'
import {cpf} from 'cpf-cnpj-validator'
import { SiVerizon } from 'react-icons/si'
import { AiOutlineClose } from 'react-icons/ai'
import axios from '../pages/api/index'


interface InputProsps extends InputHTMLAttributes<HTMLInputElement>{
    type: string;
    validate?: 'cpf' | 'cep';
    value: string;
}

const Input = ({value, validate, ...rest}: InputProsps) => {
  const [cep, setCep] = useState('');
  
  if(validate == 'cpf'){
    if(cpf.isValid(value)) value = String(cpf.format(value))
  }

  if(validate == 'cep' && value.length == 8){
    axios.get(`https://viacep.com.br/ws/${value}/json/`).then((response) => {
      setCep(`${response.data.logradouro},${response.data.bairro} | ${response.data.localidade} - ${response.data.uf}`);
    })
  }

  if(validate == 'cep' && cep.length && value.length < 8){
    setCep('')
  }

  return (
    <div>
      <div>
        <div className='bg-white border-2 border-black rounded-md py-2 px-4 flex flex-row items-center'>
          <input className="outline-none" {...rest} value={value}/>
          {validate == 'cpf' && (cpf.isValid(value) ? <SiVerizon color='green' /> : <AiOutlineClose color='red' />)}
          {validate == 'cep' && (value.length == 8 ? <SiVerizon color='green' /> : <AiOutlineClose color='red' />)}
        </div>
        <div className=''>
            {(validate == 'cep' && cep) && (<h3 className='text-sm'>{cep}</h3>)}
        </div>
      </div>
    </div>
  )
}

export default Input