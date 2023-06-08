import Brands from "./components/brands";
import Filter from "./components/filter";
import Highlights from "./components/highlights"
import Showcase from "./components/showcase";


export default function Home() {
  return (
    <main>
        <Filter/>
        
        <Brands />
        <Showcase />
        <div className="hidden">
        <Highlights/>
        <Showcase />
        </div>
        
    </main>
  )
}
