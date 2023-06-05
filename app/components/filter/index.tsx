const Filter = () => (
    <div className="p-4 mb-2 mx-4 border-b-orange-400  border-b-2 flex justify-center">
        <form className="flex gap-2 flex-col">
            <div className="options-search flex gap-2">
                <label className="block">
                    <span className="text-orange-400">Marca</span>
                    <select className="block w-full border-0 border-b-2 border-orange-400">
                        <option>Fiat</option>
                        <option>Huyndai</option>
                        <option>Volkswagen</option>
                    </select>
                </label>
                <label className="block">
                    <span className="text-orange-400">Marca</span>
                    <select className="block w-full border-0 border-b-2 border-orange-400">
                        <option>Gol</option>
                        <option>HB 20</option>
                        <option>Tucson</option>
                    </select>
                </label>
                <label className="block">
                    <span className="text-orange-400">Valor minimo</span>
                    <input type="text" className="mt-0 block px-0.5 border-0 border-b-2 border-orange-400 focus:ring-0 focus:border--orange-600" placeholder="" />
                </label>
                <label className="block">
                    <span className="text-orange-400">Valor Maximo</span>
                    <input type="text" className="mt-0 block px-0.5 border-0 border-b-2 border-orange-400 focus:ring-0 focus:border--orange-600" placeholder="" />
                </label>
            </div>
            <section className="input-search flex gap-2">
                    <input type="text" className="mt-0 block px-0.5 border-0 border-b-2 border-orange-400 focus:ring-0 focus:border-orange-600 grow" placeholder="Digite sua busca..." />
                    <button type="submit" className="bg-orange-400 text-white px-2 py-1 rounded">
                    
                    Buscar
                    </button>
            </section>
        </form>
    </div>
)

export default Filter;
