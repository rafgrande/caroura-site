import highlightsData from '../../data/highlights.json'

const Highlights = () => (
    <>
        <section className='py-2 relative border-b border-b-orange-400 overflow-hidden lg:max-w-3xl lg:m-auto'>
            <div className="noscroll overflow-scroll snap-x flex text-xs lg:text-sm lg:font-bold lg:justify-center">
                {
                  highlightsData.map((h,i) => (
                    <div key={i} className="border-orange-400 border-2 p-1 rounded-full basis-24 h-24 shrink-0 snap-center m-1">
                        <div className="flex justify-center items-center rounded-full bg-orange-400 p-2 text-center text-white w-full h-full">{h.name}</div>
                    </div>
                  ))  
                }
            </div>
        </section>
    </>
   
)

export default Highlights;
