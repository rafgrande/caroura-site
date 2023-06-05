import Image from "next/image";
import profilePic from '../components/img/tuc.jpg';
import Showcase from "../components/showcase";

export default function Product() {
    return (
        <main className="px-4">
            <section className="breadcrumb py-2">
                {'Home > Carro > Huyndai > Tucson 2.6 - 2011'}  
            </section>
            <section className="w-full overflow-hidden">
                <section className="flex">
                    <Image src={profilePic} alt='Tucson' width={450} />
                    <Image src={profilePic} alt='Tucson' width={450} />
                    <Image src={profilePic} alt='Tucson' width={450} />
                    <Image src={profilePic} alt='Tucson' width={450} />
                    <Image src={profilePic} alt='Tucson' width={450} />
                </section>
                <section className="flex flex-col gap-4 py-2 max-w-5xl m-auto">
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
            </section>
        </main>
    )
  }