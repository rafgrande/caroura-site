import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide, faMotorcycle, faCircleUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
    <header className="bg-gradient-to-r from-orange-400 to-amber-500 p-2 mb-2 text-white flex justify-between items-center">
        <h1 className="font-bold text-lg w-1/5">
            <a href="/">Caroura</a>
        </h1> 
        <div className='border border-white p-1 flex items-center gap-2 rounded-full'>
            <FontAwesomeIcon icon={faCarSide} className='p-1 text-xl text-orange-400 bg-white rounded-full'/>
            <FontAwesomeIcon icon={faMotorcycle} className='p-1  text-xl'/>
        </div>
        <div className='text-2xl flex w-1/5 justify-end gap-2 items-center'>
            <FontAwesomeIcon icon={faCircleUser} className='border border-white p-1 rounded-full'/>
        </div>
    </header>
)

export default Header;