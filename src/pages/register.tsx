import Input from "@/components/Input"
import Button from "@/components/Button";
import { useState } from "react"
import axios from './api/index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from "next/router";
import Logo from "@/components/Logo";

const register = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmpassword, setConfirmpassword] = useState('');
	const [name, setName] = useState('');
	const [usercpf, setUsercpf] = useState('');
	const [address, setAddress] = useState('');


    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

	const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}

	const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
	}

    const handleConfirmpassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setConfirmpassword(event.target.value)
	}

    const handleCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsercpf(event.target.value)
	}

    const handleAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAddress(event.target.value)
	}

	const authenticate = () => {
		axios.get('/register', { params: { email: email, password: password } })
		.then((response) => {
			localStorage.setItem('token', response.data.token)
			Router.push('/home')
		})
		.catch((err) => {
			toast.warn(err.response.data.msg, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		})
	}

  return (
    <div className="bg-background flex flex-col gap-10 justify-start py-40 h-screen items-center">
		<Logo size="lg" />
		<div className="flex flex-col gap-2">
			<Input type="text" placeholder="Name" onChange={handleName} value={name} />
			<Input type="text" placeholder="Email" onChange={handleEmail} value={email} />
			<Input type="password" placeholder="Password" onChange={handlePassword} value={password} />
			<Input type="password" placeholder="Confirm Password" onChange={handleConfirmpassword} value={confirmpassword} />
			<Input type="text" placeholder="CEP" onChange={handleAddress} value={address} validate="cep" maxLength={8}/>
			<Input type="text" placeholder="CPF" onChange={handleCpf} value={usercpf} validate="cpf" maxLength={11}/>
		</div>
		<Button text="Entrar" onClick={authenticate} />
		<ToastContainer />
    </div>
  )
}

export default register