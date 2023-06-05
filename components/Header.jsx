import {Animated} from "react-animated-css";

const Header = () =>  {
  return(
    <header className="w-full h-screen bg-red-500">
      <div className="logo-container w-full" style={{background:'red'}}>
        Logo
      </div>
      <div className="flex">
        <div style={{background:'blue'}} >
          <p>
            Transformar negócios,
            utilizando tecnologia e
            inovação como aliados.
          </p>
        </div>
        <div  style={{background:'yellow'}}>
          aneis
        </div>
      </div>
    </header>
  )

}


export default Header;
