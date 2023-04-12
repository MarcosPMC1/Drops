import Logo from "./Logo"
import {BiSearchAlt2, BiCart, BiUser} from 'react-icons/bi'
import Link from "next/link"

const Header = () => {
  return (
    <div className="bg-background flex flex-row justify-between items-center h-14 px-10">
        <div className="p-2">
            <Link href='/home'>
                <Logo size="sm" />
            </Link>
        </div>
        <div className="flex flex-row bg-white h-8 items-center rounded-lg px-4">
            <input className="bg-none outline-none" placeholder="Pesquisar"></input>
            <BiSearchAlt2 size={32}/>
        </div>
        <div className="flex flex-row gap-8">
            <Link href='/cart'>
                <BiCart size={32}/>
            </Link>
            <Link href='/user'>
                <BiUser size={32}/>
            </Link>
        </div>
    </div>
  )
}

export default Header