const Footer = () => (
    <footer className="flex flex-col bg-gradient-to-r from-orange-400 to-amber-500 text-white divide-y px-4">
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
)

export default Footer;