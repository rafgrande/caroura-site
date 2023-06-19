import brandsData from "../../data/brands.json"

const Brands = () => {
    return (
        <section className="py-2 relative border-b border-b-orange-400 text-orange-400 overflow-hidden">
            <div className="noscroll overflow-scroll snap-x flex gap-2 text-sm font-bold lg:justify-center">
                 {
                    brandsData.map((b, i) => (
                        <div key={i} className="p-2 text-center snap-center lg:w-auto hover:text-white hover:bg-orange-400 rounded-md">
                            <a href={b.slug}>{b.name}</a>
                        </div>
                    ))
                 }   
                <div className="p-2 text-center snap-center lg:w-auto hover:text-white hover:bg-orange-400 rounded-md">
                    <a href="/marcas">Ver Todas</a>
                </div> 
            </div>
        </section>
    )
}

export default Brands;