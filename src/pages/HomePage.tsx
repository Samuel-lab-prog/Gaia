
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex h-screen flex-col items-center justify-center px-6 bg-[url(./src/assets/laura.png)] bg-top bg-cover lg:bg-[url(./src/assets/flautas.png)]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/95 lg:bg-gradient-to-t lg:from-black/80 lg:to-black/50"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-white lg:text-9xl">Gaia</h1>
          <p className="mb-4 text-gray-300 lg:text-base">
            Grupo instrumental do IFRS campus Osório
          </p>
          <Button to="/about" variant="secondary">
            Ver shows
          </Button>
        </div>
      </section>

      {/* CONHEÇA O GAIA */}
      <section className="relative flex h-78 flex-col justify-center overflow-hidden p-6 z-10 md:h-84 lg:h-116 lg:p-12">
        <div className="absolute top-0 right-0 hidden h-full w-4/5 z-0 bg-center bg-cover md:block md:bg-[url('/src/assets/laura2.png')]"></div>

        <div className="relative z-10">
          <h2 className="text-white md:text-5xl">Conheça o Gaia</h2>
          <p className="my-2 text-gray-300 md:my-5 md:w-3/5 xl:w-2/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            reprehenderit eum autem veniam ratione aspernatur vero assumenda
            voluptas, blanditiis quo?
          </p>
          <Button to="/about" variant="secondary">
            Sobre nós
          </Button>
        </div>
      </section>

      {/* NOSSA MISSÃO */}
      <section className="relative flex flex-col items-start justify-center p-6 z-10 bg-top bg-cover h-70 md:h-96 lg:h-146 lg:p-12 bg-[url(./src/assets/flavia.png)]">
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/100"></div>

        <h2 className="z-10 text-white md:text-5xl w-3/5">Nossa missão</h2>
        <p className="z-10 my-2 text-gray-300 w-3/5 md:w-3/5 xl:w-2/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed
          mollitia earum voluptatem hic dolorum natus in veritatis ipsam
          ratione!
        </p>
        
      </section>

      {/* MEMBROS */}
      <section className="relative flex flex-col items-center p-6 z-10 lg:p-12">
        <h2 className="text-center text-white md:text-5xl">Membros</h2>
        <p className="my-2 text-center text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          mollitia!
        </p>
        <img
          src="./src/assets/membros.png"
          alt=""
          className="mb-4 w-full lg:w-4/5"
          loading="lazy"
        />
        <Button variant="secondary" to="/members">
          Conheça-os
        </Button>
      </section>

      {/* REDES SOCIAIS */}
      <section className="relative flex flex-col items-center p-6 z-10 bg-neutral-950 lg:p-12">
        <h2 className="mb-5 text-white md:text-5xl">Acompanhe a gente</h2>

        <div className="flex w-full items-center justify-center gap-4">
          <img
            src="./src/assets/instagram.svg"
            alt="Instagram"
            className="w-10 hover:cursor-pointer hover:opacity-50"
            loading="lazy"
          />
          <img
            src="./src/assets/facebook.svg"
            alt="Facebook"
            className="w-10 hover:cursor-pointer hover:opacity-50"
            loading="lazy"
          />
          <img
            src="./src/assets/youtube.svg"
            alt="YouTube"
            className="w-10 hover:cursor-pointer hover:opacity-50"
            loading="lazy"
          />
        </div>

        <p className="my-2 text-gray-300">
          Informe seu e-mail para receber novidades:
        </p>

        <form className="flex w-full flex-col items-center lg:w-1/2">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="input-text mb-3 w-full"
          />
          <Button variant="secondary" type="submit">
            Inscrever-se
          </Button>
        </form>
      </section>
    </>
  );
}
