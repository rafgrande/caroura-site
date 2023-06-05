import Image from 'next/image';
import profilePic from '../img/tuc.jpg';


const Showcase = () => (
    <section className="showcase-container p-4 mb-2 mx-4 gap-2  flex justify-center">
        <div className='showcase-content'>
            <span className="showcase-title text-orange-400 font-bold text-lg">Melhores ofertas</span>
            <div className="showcase-content flex gap-2">
                <div className="showcase-item border border-transparent hover:border-orange-400 p-2">
                    <div className='relative'>
                        <Image
                            src={profilePic}
                            alt='Tucson'
                            width={200}
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
                <div className="showcase-item border border-transparent hover:border-orange-400 p-2">
                    <div className='relative'>
                        <Image
                            src={profilePic}
                            alt='Tucson'
                            width={200}
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
                <div className="showcase-item border border-transparent hover:border-orange-400 p-2">
                    <div className='relative'>
                        <Image
                            src={profilePic}
                            alt='Tucson'
                            width={200}
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
                <div className="showcase-item border border-transparent hover:border-orange-400 p-2">
                    <div className='relative'>
                        <Image
                            src={profilePic}
                            alt='Tucson'
                            width={200}
                        />
                        <div className='absolute top-0 right-0 flex gap-1 flex-col items-end'>
                            <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Freio ABS</div>
                            <div className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>Direção eletrica</div>
                        </div>
                    </div>
                    <div className='text-lg'>Tucson - 2007</div>
                    <div className='text-sm'>Hyundai</div>
                    <div>Rafael</div>
                    <div className='text-xl font-bold'>R$ 20.000,00</div>
                    <button className='bg-orange-400 text-white rounded-md w-full p-2 mt-1'>Detalhes</button>
                </div>
            </div>
        </div>
    </section>
)

export default Showcase;