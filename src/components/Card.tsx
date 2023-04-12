import Image from "next/image"
import Item from '../img/item1.jpg'

interface CardProps{
    title?: string;
}

const Card = ({title}: CardProps) => {
  return (
    <div className="rounded-lg bg-[#fff]">
        <Image src={Item} alt="Item" className="p-2"/>
        <div className="p-6">
            <h4>{title}</h4>
        </div>
    </div>
    
  )
}

export default Card