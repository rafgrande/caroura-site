import allBrandsData from '../data/allBrands.json'

export default function Category( {params}: any ) {
    return (
        <main className='flex max-w-4xl flex-wrap justify-center m-auto'>
            {allBrandsData.map(b => (
                <div className='w-1/2 lg:w-1/5 p-1' key={b.id}>
                    <a className='border border-black bg-gray-50 hover:bg-gray-200 h-full w-full flex justify-center p-2' href={b.slug}>{b.name}</a>
                </div>
            ))}
        </main>
    )
  }