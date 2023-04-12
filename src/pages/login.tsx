import Input from "@/components/Input"
import Button from "@/components/Button";
import { useState } from "react"
import axios from './api/index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from "next/router";
import Logo from "@/components/Logo";

const login = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}

	const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
	}

	const authenticate = () => {
		axios.get('/login', { params: { email: email, password: password } })
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
		<div className="flex flex-col gap-4">
			<Input type="text" placeholder="Email" onChange={handleEmail} value={email} />
			<Input type="password" placeholder="Password" onChange={handlePassword} value={password} />
		</div>
		<Button text="Entrar" onClick={authenticate} />
		<ToastContainer />
    </div>
  )
}

export default login