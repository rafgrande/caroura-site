const Header = () => (
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
)

export default Header;