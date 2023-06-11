import Image from "next/image";
import Brands from "./components/brands";
import Filter from "./components/filter";
import Highlights from "./components/highlights"
import Showcase from "./components/showcase";
import banner from './components/img/banner.png';

export default function Home() {
  return (
    <main>
        <Filter/>
        <Brands />
        <Showcase />
        <Highlights/>
        <Showcase />  
        <div className="p-2 h-14 relative">
          <Image src={banner} alt='banner' fill={true} />
        </div>     
    </main>
  )
}
