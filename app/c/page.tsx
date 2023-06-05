import Image from "next/image";
import profilePic from '../components/img/tuc.jpg';

export default function Category() {
    return (
      <main className="px-4">
          <section className="breadcrumb py-2">
            {'Home > Carro > Huyndai > Tucson'}  
          </section>
          <section className="results-prodcts flex gap-2">
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
           
            <section className="results-prodcts-filter grow flex flex-wrap">
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/4 ">
                <div className='relative'>
                  <Image src={profilePic} alt='Tucson' width={200} className="m-auto"/>
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
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/4 ">
                <div className='relative'>
                  <Image src={profilePic} alt='Tucson' width={200} className="m-auto"/>
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
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/4 ">
                <div className='relative'>
                  <Image src={profilePic} alt='Tucson' width={200} className="m-auto"/>
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
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/4 ">
                <div className='relative'>
                  <Image src={profilePic} alt='Tucson' width={200} className="m-auto"/>
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
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/4 ">
                <div className='relative'>
                  <Image src={profilePic} alt='Tucson' width={200} className="m-auto"/>
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
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/4 ">
                <div className='relative'>
                  <Image src={profilePic} alt='Tucson' width={200} className="m-auto"/>
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
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/4 ">
                <div className='relative'>
                  <Image src={profilePic} alt='Tucson' width={200} className="m-auto"/>
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
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/4 ">
                <div className='relative'>
                  <Image src={profilePic} alt='Tucson' width={200} className="m-auto"/>
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
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/4 ">
                <div className='relative'>
                  <Image src={profilePic} alt='Tucson' width={200} className="m-auto"/>
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
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/4 ">
                <div className='relative'>
                  <Image src={profilePic} alt='Tucson' width={200} className="m-auto"/>
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
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/4 ">
                <div className='relative'>
                  <Image src={profilePic} alt='Tucson' width={200} className="m-auto"/>
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
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/4 ">
                <div className='relative'>
                  <Image src={profilePic} alt='Tucson' width={200} className="m-auto"/>
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
              <div className="showcase-item border border-transparent hover:border-orange-400 p-2 w-1/4 ">
                <div className='relative'>
                  <Image src={profilePic} alt='Tucson' width={200} className="m-auto"/>
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
          </section>
      </main>
    )
  }