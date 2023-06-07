'use client';

import { useState } from "react";

const Filter = () => {

    const [isShowOptions, setIsShowOptions] = useState(false)
    
    const showOptions = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('if');
        setIsShowOptions(!isShowOptions);
    }

    return (
        <section className="border-b border-orange-400 flex justify-center">
            <div className="p-4 pt-0 w-full max-w-3xl">
                <div className="flex justify-end">
                    <button className="text-orange-400 font-bold text-sm p-2" onClick={showOptions}>Mostrar mais opções</button>
                </div>
                <form>
                    <div className={`flex-col gap-4 mb-4 flex ${isShowOptions ? "max-h-96" : "max-h-0"} transition-max-height duration-1000 ease-in-out overflow-hidden`}>
                        <div className="flex gap-4">
                            <label className="block w-1/2">
                                <span className="text-orange-400">Marca</span>
                                <select className="block w-full border-0 border-b-2 border-orange-400">
                                    <option>Fiat</option>
                                    <option>Huyndai</option>
                                    <option>Volkswagen</option>
                                </select>
                            </label>
                            <label className="block w-1/2">
                                <span className="text-orange-400">Marca</span>
                                <select className="block w-full border-0 border-b-2 border-orange-400">
                                    <option>Gol</option>
                                    <option>HB 20</option>
                                    <option>Tucson</option>
                                </select>
                            </label>
                        </div>
                        
                        <div className="flex gap-4">
                            <label className="block w-1/2">
                                <span className="text-orange-400">Valor minimo</span>
                                <input type="text" className="w-full mt-0 block px-0.5 border-0 border-b-2 border-orange-400 focus:ring-0 focus:border--orange-600" placeholder="" />
                            </label>
                            <label className="block w-1/2">
                                <span className="text-orange-400">Valor Maximo</span>
                                <input type="text" className="w-full mt-0 block px-0.5 border-0 border-b-2 border-orange-400 focus:ring-0 focus:border--orange-600" placeholder="" />
                            </label>
                        </div>
                    </div>
                    <section className="input-search flex gap-2">
                        <input type="text" className="mt-0 block px-0.5 border-0 border-b-2 border-orange-400 focus:ring-0 focus:border-orange-600 grow" placeholder="Digite sua busca..." />
                        <button type="submit" className="bg-orange-400 text-white px-2 py-1 rounded">
                            Buscar
                        </button>
                    </section>
                </form>
            </div>
        </section>
    )
}

export default Filter;
