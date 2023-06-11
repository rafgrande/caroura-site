import Image from "next/image";
import profilePic from '../components/img/tuc.jpg';
import Showcase from "../components/showcase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Product() {
    return (
        <main>
            <section className="breadcrumb p-2 flex gap-2 items-center">
                <FontAwesomeIcon icon={faHouse} />
                <span>Carro</span>
                <span>Hyundai</span>
                <span>Tucson 2.6 - 2011</span> 
            </section>
            <section className="flex justify-center">
                <Image src={profilePic} alt='Tucson' width={650}/>
            </section>

                <section className="noscroll overflow-scroll snap-x flex max-w-5xl m-auto">
                    <div className=" basis-[27vw] shrink-0 snap-center lg:w-20 lg:basis-auto lg:shrink">
                        <Image src={profilePic} alt='Tucson' width={450}/>
                    </div>
                    <div className=" basis-[27vw] shrink-0 snap-center lg:w-20 lg:basis-auto lg:shrink">
                        <Image src={profilePic} alt='Tucson' width={450}/>
                    </div>
                    <div className=" basis-[27vw] shrink-0 snap-center lg:w-20 lg:basis-auto lg:shrink">
                        <Image src={profilePic} alt='Tucson' width={450}/>
                    </div>
                    <div className=" basis-[27vw] shrink-0 snap-center lg:w-20 lg:basis-auto lg:shrink">
                        <Image src={profilePic} alt='Tucson' width={450}/>
                    </div>
                </section>
                <section className="flex flex-col gap-4 p-2 max-w-5xl m-auto">
                    <div className="flex items-end gap-2">
                        <div className="text-4xl font-bold">Tucson 2.6</div>
                        <div className="text-lg">2009 - Huyndai</div>
                    </div>
                    <section className="tags flex gap-1">
                        <div className="px-2 py-1 bg-orange-400 text-white rounded-md text-xs font-bold">Freio ABS</div>
                        <div className="px-2 py-1 bg-orange-400 text-white rounded-md text-xs font-bold">Vidro eletrico</div>
                    </section>
                    <section className="border border-orange-400 p-4 flex gap-4">
                        <div>
                            <div className="font-bold">Câmbio</div>
                            <div>Automatico</div>
                        </div>
                        <div>
                            <div className="font-bold">Vidros eletricos</div>
                            <div>Sim</div>
                        </div>
                    </section>
                    <section className="border border-orange-400 p-4 flex flex-col">
                        <span className="font-bold mb-2 pb-2 border-b border-b-orange-400">Descrição</span>
                        <div>Veiculo em otimo estado, com poucas avarias</div>
                    </section>
                    <div className="text-3xl font-bold mt-4">R$ 20.000,00</div>
                    <form className="flex flex-col gap-2 justify-center items-center">
                        <textarea name="msg" className="w-full border border-orange-400"></textarea>
                        <input className="bg-orange-400 text-white font-bold p-2 rounded-md" type="submit" value={"Enviar"}/>
                    </form>
                </section>
                <Showcase />

        </main>
    )
  }