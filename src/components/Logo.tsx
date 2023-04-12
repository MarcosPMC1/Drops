interface LogoProps{
  size: 'sm' | 'lg';
}

const Logo = ({size}: LogoProps) => {
  return (
    <>
      {size == 'sm' && <h1 className="font-[UnifrakturMaguntia] text-3xl">drops</h1>}
      {size == 'lg' && <h1 className="font-[UnifrakturMaguntia] text-7xl">drops</h1>}
    </>
  )
}

export default Logo