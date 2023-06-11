import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide, faMotorcycle, faCircleUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
    <>
    <header className="bg-gradient-to-r from-orange-400 to-amber-500 p-2 mb-2 text-white flex justify-between items-center">
        <h1 className="font-bold text-lg w-1/5">Caroura</h1> 
        <div className='border border-white p-1 flex items-center gap-2 rounded-full'>
            <FontAwesomeIcon icon={faCarSide} className='p-1 text-xl text-orange-400 bg-white rounded-full'/>
            <FontAwesomeIcon icon={faMotorcycle} className='p-1  text-xl'/>
        </div>
        <div className='text-2xl flex w-1/5 justify-end gap-2 items-center'>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <FontAwesomeIcon icon={faCircleUser} className='border border-white p-1 rounded-full'/>
        </div>
    </header>
    <div className="hidden">
            <header className="bg-gradient-to-r from-orange-400 to-amber-500 p-4 flex text-white font-bold items-center justify-between">
        <h1 className="text-3xl">Caroura</h1>
        
            <section className="header-menu flex gap-2">
                <div className={`p-2 bg-white text-orange-400 rounded-md`}>Carros</div>
                <div className="p-2 rounded-md hover:text-orange-400 hover:bg-white">Motos</div>
                <div className="p-2 rounded-md hover:text-orange-400 hover:bg-white">Vender</div>
            </section>
            <section className="header-login">
                Registrar-se | Entrar
            </section>
        
    </header>
    </div>
    </>

)

export default Header;