import Image from 'next/image';
import profilePic from '../img/tuc.jpg';

import showcaseData from '../../data/showcase.json'

const Showcase = () => {
    return (
        <>
            <section className='py-2 relative border-b border-b-orange-400 overflow-hidden lg:max-w-3xl lg:m-auto'>
                <div className='text-orange-400 font-bold px-2 flex justify-between items-center mb-1'>
                    <span className='lg:text-lg'>{showcaseData[0].name}</span>
                    <span className='text-xs underline'>Veja mais</span>
                </div>
                <div className="noscroll overflow-scroll snap-x flex text-sm font-bold lg:justify-center">
                    
                    {
                        showcaseData[0].products.map(p => 
                            <div className="showcase-item basis-[65vw] shrink-0 border border-transparent hover:border-orange-400 p-2 snap-center lg:w-auto lg:basis-auto lg:shrink">
                            <div className='relative'>
                                <Image
                                    src={profilePic}
                                    alt='Tucson'
                                    width={200}
                                    priority={true}
                                />
                                <div className='absolute top-0 right-0 flex gap-1 flex-col items-end'>
                                    {
                                        p.flags && p.flags.map((f,i) => (
                                            <div key={i} className='text-xs bg-orange-400 text-white p-1 rounded-md text-center opacity-75'>{f.name}</div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='text-lg'>{`${p.model} - ${p.year}`}</div>
                            <div className='text-sm'>{p.brand}</div>
                            <div>{p.seller}</div>
                            <div className='text-xl font-bold'>{p.price}</div>
                            <button className='bg-orange-400 text-white rounded-md w-full p-2 mt-1'>Detalhes</button>
                        </div> 
                            )
                    }
                </div>
            </section>
        </>
    )
}

export default Showcase;