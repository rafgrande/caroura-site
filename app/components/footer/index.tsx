import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <>
        <footer className="flex flex-col bg-gradient-to-r from-orange-400 to-amber-500 text-white items-stretch">
            <section className="flex gap-2 flex-col py-4 px-2 border-b border-b-white items-center bg-white text-orange-400">
                <div className='w-full max-w-lg flex flex-col gap-2'>
                    <span className="font-bold">Cadastra-se e receba as melhores ofertas:</span>
                    <form className="flex gap-4">
                        <label className="block grow">
                            <input type="text" className="w-full mt-0 block px-0.5 border-0 border-b-2 bg-transparent border-orange-400 focus:ring-0 focus:border--orange-600" placeholder="Email" />
                        </label>
                        <input type="submit" value={"Enviar"} className="bg-orange-400 text-white rounded-md p-2 font-bold"/>
                    </form>
                </div>
            </section>
            <div className="text-3xl font-bold text-center py-4 px-2 border-b border-b-white">Caroura</div>
            <section className='py-4 px-2 border-b border-b-white'>      
                <div>
                    <div>Carros</div>
                    <div>Motos</div>
                </div>
                <div>
                    Cadastrar sua ofertas
                </div>
                
            </section>
            <section className='flex gap-4 text-3xl justify-center py-4 px-2 border-b border-b-white'>
                <FontAwesomeIcon icon={faLinkedinIn} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebookF} />
            </section> 
            <div className="flex justify-center py-4 px-2 border-b border-b-white">
                2023 | Har3 Tecnológia | CNPJ:  43.987.0001/99
            </div>

        </footer>

    <footer className="hidden flex-col bg-gradient-to-r from-orange-400 to-amber-500 text-white divide-y px-4">
        <div className="py-4 flex gap-4 justify-center items-center">
            <span className="font-bold">Cadastra-se e receba as melhores ofertas:</span>
            <form className="flex gap-2 items-end">
                <label className="block">
                    <input type="text" className="mt-0 block px-0.5 border-0 border-b-2 bg-transparent border-white focus:ring-0 focus:border--orange-600 placeholder:text-white" placeholder="Nome" />
                </label>
                <label className="block">
                    <input type="text" className="mt-0 block px-0.5 border-0 border-b-2 bg-transparent border-white focus:ring-0 focus:border--orange-600 placeholder:text-white" placeholder="Email" />
                </label>
                <input type="submit" value={"Enviar"} className="bg-white text-orange-400 rounded-md p-2 font-bold"/>
            </form>
        </div>
        <div className="flex justify-between py-4">
            <div className="text-3xl font-bold self-center">Caroura</div>
            <div>
                <div>Carros</div>
                <div>Motos</div>
            </div>
            <div>
                Cadastrar sua ofertas
            </div>
            <div>
                <div>Linkedin</div>
                <div>Instagram</div>
                <div>Facebook</div>
            </div>
        </div>
        <div className="flex justify-center py-4">
            2023 | Har3 Tecnológia | CNPJ:  43.987.0001/99
        </div>
        

    </footer>
    </>
)

export default Footer;