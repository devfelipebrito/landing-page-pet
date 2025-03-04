import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import dogImage from "../../../public/hero-dog.webp";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#E84C2D] text-white relative overflow-hidden">
      <div className="container mx-auto py-16 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p className="lg:text-lg">
              Oferecemos os melhores serviçõs para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>

            <a
              href="#"
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                de desconto na primeira compra.
              </p>
            </div>
          </div>

          <div className="hidden md:block h-full">
            <Image src={dogImage} alt="Foto do dog" />
          </div>
        </article>
      </div>
    </section>
  );
}
