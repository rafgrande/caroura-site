import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <>
        <footer className="flex flex-col bg-gradient-to-r from-orange-400 to-amber-500 text-white divide-y p-2 gap-4 items-center">
            <section className="flex gap-4 flex-col max-w-lg com">
                <span className="font-bold">Cadastra-se e receba as melhores ofertas:</span>
                <form className="flex gap-4">
                    <label className="block grow">
                        <input type="text" className="w-full mt-0 block px-0.5 border-0 border-b-2 bg-transparent border-white focus:ring-0 focus:border--orange-600 placeholder:text-white" placeholder="Email" />
                    </label>
                    <input type="submit" value={"Enviar"} className="bg-white text-orange-400 rounded-md p-2 font-bold"/>
                </form>
            </section>
            <div className="text-3xl font-bold text-center pt-2">Caroura</div>
            <section className='pt-2'>      
                <div>
                    <div>Carros</div>
                    <div>Motos</div>
                </div>
                <div>
                    Cadastrar sua ofertas
                </div>
                
            </section>
            <section className='flex gap-4 text-3xl pt-2 justify-center'>
                <FontAwesomeIcon icon={faLinkedinIn} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebookF} />
            </section>
            <div className="flex justify-center py-4">
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