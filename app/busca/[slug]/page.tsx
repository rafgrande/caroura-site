'use client';
import { use, useState } from "react";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSliders, faXmark } from "@fortawesome/free-solid-svg-icons";
import Filter from "../../components/filter";

import brandsData from "../../data/allBrands.json";
import productsData from "../../data/allProducts.json";

interface IBrand {
  id: string,
  name: string,
  slug: string
}

export default function Search( {params}: any) {
    const {slug} = params;

  const getProduct = productsData.filter(p => {
    return p.name.indexOf(slug) >= 0
  })

  

  const products: any = []

  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [brands, setBrands] = useState(brandsData);
  const [filterBrand, setFilterBrand] = useState('');
  const [isOpenSuggestionBrand, setIsOpenSuggestionBrand] = useState(false);
  const [brandsSelected, setBrandsSelected] = useState<IBrand[]>([]);

  const handlerFilterBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setFilterBrand(e.target.value)
    const brandsFiltered = brandsData.filter(b => {
      return b.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
    })
    setBrands(brandsFiltered)
  }

  const openFilters = () => {
    setIsOpenFilter(true);
  }

  const closeFilters = () => {
    setIsOpenFilter(false);
  }

  console.log('ds', brandsSelected)
    return (
        <main className="px-2">
          <Filter/>
          <section className={`fixed top-0 ${isOpenFilter ? "left-0" : "-left-[100vw]"} h-screen w-screen bg-black/75 z-30 flex flex-row-reverse justify-between`}>
            <FontAwesomeIcon icon={faXmark} className="text-white p-5 text-xl" onClick={closeFilters}/>
            <div className={`relative p-2 w-4/5 lg:w-1/4 bg-white h-screen transition-left duration-500 ease-in-out ${isOpenFilter ? "left-0" : "-left-full"}`}>
              <section className="min-w-max my-2">
                <form className="results-prodcts-filter w-full"> 
                  <div className="opt-filter pb-2">
                    <span className="opt-filter-title font-bold mb-2 pb-2 border-b-orange-400 border-b block" >Tipo</span>
                    <div className="opt-filter-opt flex flex-col">
                      <label className="inline-flex items-center">
                        <input type="checkbox" className="roundedborder-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300
                              focus:ring
                              focus:ring-offset-0
                              focus:ring-indigo-200
                              focus:ring-opacity-50
                            " />
                        <span className="ml-2">SUV</span>
                      </label>
                      <label className="inline-flex items-center">
                          <input type="checkbox" className="roundedborder-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300
                              focus:ring
                              focus:ring-offset-0
                              focus:ring-indigo-200
                              focus:ring-opacity-50
                            "/>
                          <span className="ml-2">Hatch</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="roundedborder-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300
                              focus:ring
                              focus:ring-offset-0
                              focus:ring-indigo-200
                              focus:ring-opacity-50
                            "/>
                          <span className="ml-2">Sedan</span>
                        </label>

                    </div>
                  </div>
                  <div className="opt-filter pb-2">
                    <span className="opt-filter-title font-bold mb-2 pb-2 border-b-orange-400 border-b block" >Cor</span>
                    <div className="opt-filter-opt flex flex-col">
                      <label className="inline-flex items-center">
                          <input type="checkbox" className="roundedborder-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300
                              focus:ring
                              focus:ring-offset-0
                              focus:ring-indigo-200
                              focus:ring-opacity-50
                            " />
                          <span className="ml-2">Branca</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="roundedborder-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300
                              focus:ring
                              focus:ring-offset-0
                              focus:ring-indigo-200
                              focus:ring-opacity-50
                            "/>
                          <span className="ml-2">Preta</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="roundedborder-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300
                              focus:ring
                              focus:ring-offset-0
                              focus:ring-indigo-200
                              focus:ring-opacity-50
                            "/>
                          <span className="ml-2">Prata</span>
                        </label>

                    </div>
                  </div>
                  <div className="opt-filter pb-2">
                    <span className="opt-filter-title font-bold mb-2 pb-2 border-b-orange-400 border-b block" >Adicionais</span>
                    <div className="opt-filter-opt flex flex-col">
                      <label className="inline-flex items-center">
                          <input type="checkbox" className="roundedborder-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300
                              focus:ring
                              focus:ring-offset-0
                              focus:ring-indigo-200
                              focus:ring-opacity-50
                            " />
                          <span className="ml-2">Freio ABS</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="roundedborder-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300
                              focus:ring
                              focus:ring-offset-0
                              focus:ring-indigo-200
                              focus:ring-opacity-50
                            "/>
                          <span className="ml-2">Ar-condicionado</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="roundedborder-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300
                              focus:ring
                              focus:ring-offset-0
                              focus:ring-indigo-200
                              focus:ring-opacity-50
                            "/>
                          <span className="ml-2">Vidros eletricos</span>
                        </label>
                    </div>
                  </div>
                  <div className="opt-filter pb-2">
                    <span className="opt-filter-title font-bold mb-2 pb-2 border-b-orange-400 border-b block" >Cambio</span>
                    <div className="opt-filter-opt flex flex-col">
                      <label className="inline-flex items-center">
                          <input type="checkbox" className="roundedborder-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300
                              focus:ring
                              focus:ring-offset-0
                              focus:ring-indigo-200
                              focus:ring-opacity-50
                            " />
                          <span className="ml-2">Automatico</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="roundedborder-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300
                              focus:ring
                              focus:ring-offset-0
                              focus:ring-indigo-200
                              focus:ring-opacity-50
                            "/>
                          <span className="ml-2">Manual</span>
                        </label>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </section>
          <section className="breadcrumb py-2 flex gap-2 items-center">
            <FontAwesomeIcon icon={faHouse} />
            <span>Carro</span>
            <span>busca</span>
            <span>{slug}</span>
          </section>
          <section className="text-2xl font-bold mb-2">{slug}</section>
          <section className="mb-2">
            selecionar marcas
            <input type="text" value={filterBrand} onChange={handlerFilterBrand} className="mt-0 block px-0.5 border-0 border-b-2 border-orange-400 focus:ring-0 focus:border-orange-600 grow" onFocus={() =>setIsOpenSuggestionBrand(true)} placeholder="Digite sua busca..." />
            { 
              isOpenSuggestionBrand && (
                <div className="max-h-24 border bg-white border-orange-400 border-t-0 flex flex-col overflow-x-scroll absolute">
                  {
                    brands.map(brand => (
                      <div key={brand.id} className="flex gap-2 justify-between py-1 px-2 hover:bg-gray-100">
                         <span>{brand.name}</span>
                         <button 
                          className="bg-orange-400 text-white rounded-md text-xs p-1" 
                          onClick={() => {
                            setIsOpenSuggestionBrand(false);
                            setBrandsSelected([...brandsSelected, brand])}
                          }
                        >
                          incluir
                         </button>
                      </div>
                     
                    ))
                  }
                </div>
              )
            }
          </section>
          <section className="mb-2 flex gap-2">
            {
              brandsSelected.map(brand => (<span className="bg-gray-200 px-2 py-1 rounded-md" key={brand.id}>{brand.name}</span>))
            }
            </section>
          {
            products.length ? (
              <>
              <section className="flex justify-between items-center mb-2">
            <div onClick={openFilters}>
              <FontAwesomeIcon icon={faSliders} className="text-lg"/>
            </div>
            <div>
              <select className="block w-full border-0">
                <option>Menor preço</option>
                <option>Maior preço</option>
              </select>
            </div>
          </section>
          <section className="results-prodcts-filter grow flex flex-wrap">
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/2 lg:w-1/4 ">
                <div className='relative'>
                  <Image 
                    src='/sand.jpg' 
                    alt='Tucson' 
                    width={200}
                    height={125}
                    priority={true} 
                    className="m-auto"
                  />
                  <div className='absolute top-0 right-0 flex gap-1 flex-col items-end'>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Direção eletrica</div>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Freio ABS</div>
                  </div>
                </div>
                <div className='text-lg'>Tucson - 2007</div>
                <div className='text-sm'>Hyundai</div>
                <div>Rafael</div>
                <div className='text-xl font-bold'>R$ 20.000,00</div>
                <button className='bg-orange-400 text-white rounded-md w-full p-2 mt-1'>Detalhes</button>
              </div>
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/2 lg:w-1/4 ">
                <div className='relative'>
                  <Image 
                    src='/sand.jpg' 
                    alt='Tucson' 
                    width={200}
                    height={125}
                    priority={true} 
                    className="m-auto"
                  />
                  <div className='absolute top-0 right-0 flex gap-1 flex-col items-end'>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Direção eletrica</div>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Freio ABS</div>
                  </div>
                </div>
                <div className='text-lg'>Tucson - 2007</div>
                <div className='text-sm'>Hyundai</div>
                <div>Rafael</div>
                <div className='text-xl font-bold'>R$ 20.000,00</div>
                <button className='bg-orange-400 text-white rounded-md w-full p-2 mt-1'>Detalhes</button>
              </div>
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/2 lg:w-1/4 ">
                <div className='relative'>
                  <Image 
                    src='/sand.jpg' 
                    alt='Tucson' 
                    width={200}
                    height={125}
                    priority={true} 
                    className="m-auto"
                  />
                  <div className='absolute top-0 right-0 flex gap-1 flex-col items-end'>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Direção eletrica</div>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Freio ABS</div>
                  </div>
                </div>
                <div className='text-lg'>Tucson - 2007</div>
                <div className='text-sm'>Hyundai</div>
                <div>Rafael</div>
                <div className='text-xl font-bold'>R$ 20.000,00</div>
                <button className='bg-orange-400 text-white rounded-md w-full p-2 mt-1'>Detalhes</button>
              </div>
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/2 lg:w-1/4 ">
                <div className='relative'>
                  <Image 
                    src='/sand.jpg' 
                    alt='Tucson' 
                    width={200}
                    height={125}
                    priority={true} 
                    className="m-auto"
                  />
                  <div className='absolute top-0 right-0 flex gap-1 flex-col items-end'>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Direção eletrica</div>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Freio ABS</div>
                  </div>
                </div>
                <div className='text-lg'>Tucson - 2007</div>
                <div className='text-sm'>Hyundai</div>
                <div>Rafael</div>
                <div className='text-xl font-bold'>R$ 20.000,00</div>
                <button className='bg-orange-400 text-white rounded-md w-full p-2 mt-1'>Detalhes</button>
              </div>
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/2 lg:w-1/4 ">
                <div className='relative'>
                  <Image 
                    src='/sand.jpg' 
                    alt='Tucson' 
                    width={200}
                    height={125}
                    priority={true} 
                    className="m-auto"
                  />
                  <div className='absolute top-0 right-0 flex gap-1 flex-col items-end'>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Direção eletrica</div>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Freio ABS</div>
                  </div>
                </div>
                <div className='text-lg'>Tucson - 2007</div>
                <div className='text-sm'>Hyundai</div>
                <div>Rafael</div>
                <div className='text-xl font-bold'>R$ 20.000,00</div>
                <button className='bg-orange-400 text-white rounded-md w-full p-2 mt-1'>Detalhes</button>
              </div>
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/2 lg:w-1/4 ">
                <div className='relative'>
                  <Image 
                    src='/sand.jpg' 
                    alt='Tucson' 
                    width={200}
                    height={125}
                    priority={true} 
                    className="m-auto"
                  />
                  <div className='absolute top-0 right-0 flex gap-1 flex-col items-end'>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Direção eletrica</div>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Freio ABS</div>
                  </div>
                </div>
                <div className='text-lg'>Tucson - 2007</div>
                <div className='text-sm'>Hyundai</div>
                <div>Rafael</div>
                <div className='text-xl font-bold'>R$ 20.000,00</div>
                <button className='bg-orange-400 text-white rounded-md w-full p-2 mt-1'>Detalhes</button>
              </div>
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/2 lg:w-1/4 ">
                <div className='relative'>
                  <Image 
                    src='/sand.jpg' 
                    alt='Tucson' 
                    width={200}
                    height={125}
                    priority={true} 
                    className="m-auto"
                  />
                  <div className='absolute top-0 right-0 flex gap-1 flex-col items-end'>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Direção eletrica</div>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Freio ABS</div>
                  </div>
                </div>
                <div className='text-lg'>Tucson - 2007</div>
                <div className='text-sm'>Hyundai</div>
                <div>Rafael</div>
                <div className='text-xl font-bold'>R$ 20.000,00</div>
                <button className='bg-orange-400 text-white rounded-md w-full p-2 mt-1'>Detalhes</button>
              </div>
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/2 lg:w-1/4 ">
                <div className='relative'>
                  <Image 
                    src='/sand.jpg' 
                    alt='Tucson' 
                    width={200}
                    height={125}
                    priority={true} 
                    className="m-auto"
                  />
                  <div className='absolute top-0 right-0 flex gap-1 flex-col items-end'>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Direção eletrica</div>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Freio ABS</div>
                  </div>
                </div>
                <div className='text-lg'>Tucson - 2007</div>
                <div className='text-sm'>Hyundai</div>
                <div>Rafael</div>
                <div className='text-xl font-bold'>R$ 20.000,00</div>
                <button className='bg-orange-400 text-white rounded-md w-full p-2 mt-1'>Detalhes</button>
              </div>
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/2 lg:w-1/4 ">
                <div className='relative'>
                  <Image 
                    src='/sand.jpg' 
                    alt='Tucson' 
                    width={200}
                    height={125}
                    priority={true} 
                    className="m-auto"
                  />
                  <div className='absolute top-0 right-0 flex gap-1 flex-col items-end'>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Direção eletrica</div>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Freio ABS</div>
                  </div>
                </div>
                <div className='text-lg'>Tucson - 2007</div>
                <div className='text-sm'>Hyundai</div>
                <div>Rafael</div>
                <div className='text-xl font-bold'>R$ 20.000,00</div>
                <button className='bg-orange-400 text-white rounded-md w-full p-2 mt-1'>Detalhes</button>
              </div>
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/2 lg:w-1/4 ">
                <div className='relative'>
                  <Image 
                    src='/sand.jpg' 
                    alt='Tucson' 
                    width={200}
                    height={125}
                    priority={true} 
                    className="m-auto"
                  />
                  <div className='absolute top-0 right-0 flex gap-1 flex-col items-end'>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Direção eletrica</div>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Freio ABS</div>
                  </div>
                </div>
                <div className='text-lg'>Tucson - 2007</div>
                <div className='text-sm'>Hyundai</div>
                <div>Rafael</div>
                <div className='text-xl font-bold'>R$ 20.000,00</div>
                <button className='bg-orange-400 text-white rounded-md w-full p-2 mt-1'>Detalhes</button>
              </div>
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/2 lg:w-1/4 ">
                <div className='relative'>
                  <Image 
                    src='/sand.jpg' 
                    alt='Tucson' 
                    width={200}
                    height={125}
                    priority={true} 
                    className="m-auto"
                  />
                  <div className='absolute top-0 right-0 flex gap-1 flex-col items-end'>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Direção eletrica</div>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Freio ABS</div>
                  </div>
                </div>
                <div className='text-lg'>Tucson - 2007</div>
                <div className='text-sm'>Hyundai</div>
                <div>Rafael</div>
                <div className='text-xl font-bold'>R$ 20.000,00</div>
                <button className='bg-orange-400 text-white rounded-md w-full p-2 mt-1'>Detalhes</button>
              </div>
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/2 lg:w-1/4 ">
                <div className='relative'>
                  <Image 
                    src='/sand.jpg' 
                    alt='Tucson' 
                    width={200}
                    height={125}
                    priority={true} 
                    className="m-auto"
                  />
                  <div className='absolute top-0 right-0 flex gap-1 flex-col items-end'>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Direção eletrica</div>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Freio ABS</div>
                  </div>
                </div>
                <div className='text-lg'>Tucson - 2007</div>
                <div className='text-sm'>Hyundai</div>
                <div>Rafael</div>
                <div className='text-xl font-bold'>R$ 20.000,00</div>
                <button className='bg-orange-400 text-white rounded-md w-full p-2 mt-1'>Detalhes</button>
              </div>
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/2 lg:w-1/4 ">
                <div className='relative'>
                  <Image 
                    src='/sand.jpg' 
                    alt='Tucson' 
                    width={200}
                    height={125}
                    priority={true} 
                    className="m-auto"
                  />
                  <div className='absolute top-0 right-0 flex gap-1 flex-col items-end'>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Direção eletrica</div>
                    <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Freio ABS</div>
                  </div>
                </div>
                <div className='text-lg'>Tucson - 2007</div>
                <div className='text-sm'>Hyundai</div>
                <div>Rafael</div>
                <div className='text-xl font-bold'>R$ 20.000,00</div>
                <button className='bg-orange-400 text-white rounded-md w-full p-2 mt-1'>Detalhes</button>
              </div>
            </section>
            </>
            ): (
              "Não encontramos produtos nessa busca"
            )
          }
          
        </main>
    )
  }