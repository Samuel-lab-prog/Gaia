import { motion } from 'framer-motion';
import Button from '../components/Button';
import flavia from '../assets/flavia.webp';
import membros from '../assets/membros.webp';
import facebook from '../assets/facebook.svg';
import youtube from '../assets/youtube.svg';
import instagram from '../assets/instagram.svg';
import flautas from '../assets/flautas.webp';
import laura from '../assets/laura.webp';

export default function Home() {
  return (
    <main className="absolute w-full h-full">
      <section
        className="relative flex h-screen flex-col items-center justify-center px-6 bg-top bg-cover"
        style={{
          backgroundImage: `url(${laura})`,
        }}
      >
        <div
          className="hidden lg:block absolute inset-0 bg-top bg-cover"
          style={{ backgroundImage: `url(${flautas})` }}
        ></div>

        <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black lg:bg-linear-to-t lg:from-black/80 lg:to-black/50"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-white lg:text-9xl">Gaia</h1>
          <p className="mb-4 text-gray-300 lg:text-base">
            Grupo instrumental do IFRS campus Osório
          </p>
          <Button to="/shows" variant="secondary">
            Ver shows
          </Button>
        </div>
      </section>

      <motion.section
        className="relative flex h-78 flex-col justify-center overflow-hidden p-6 z-10 md:h-84 lg:h-116 lg:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className="absolute top-0 right-0 hidden h-full w-4/5 z-0 bg-center bg-cover md:block md:bg-[url('/src/assets/laura2.webp')]"></div>

        <div className="relative z-10">
          <h2 className="text-white md:text-5xl">Conheça o Gaia</h2>
          <p className="my-2 text-gray-300 md:my-5 md:w-3/5 xl:w-2/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius reprehenderit eum autem veniam ratione aspernatur
            vero assumenda voluptas, blanditiis quo?
          </p>
          <Button to="/about" variant="secondary">
            Sobre nós
          </Button>
        </div>
      </motion.section>

      <motion.section
        className="relative flex flex-col items-start justify-center p-6 z-10 bg-top bg-cover h-70 md:h-96 lg:h-146 lg:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ backgroundImage: `url(${flavia})` }}
      >
        <div className="absolute inset-0 bg-linear-to-l from-black/50 to-black"></div>

        <h2 className="z-10 text-white md:text-5xl w-3/5">
          Nossa missão
        </h2>
        <p className="z-10 my-2 text-gray-300 w-3/5 md:w-3/5 xl:w-2/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          sed mollitia earum voluptatem hic dolorum natus in veritatis
          ipsam ratione!
        </p>
      </motion.section>

      <motion.section
        className="relative flex flex-col items-center p-6 z-10 lg:p-12"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.05 }}
      >
        <h2 className="text-center text-white md:text-5xl">
          Membros
        </h2>
        <p className="my-2 text-center text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veniam, mollitia!
        </p>
        <img
          src={membros}
          alt=""
          className="mb-4 w-full lg:w-4/5"
          loading="lazy"
        />
        <Button variant="secondary" to="/members">
          Conheça-os
        </Button>
      </motion.section>

      <motion.section className="relative flex flex-col items-center p-6 z-10 bg-neutral-950 lg:p-12"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.05 }}
      >
        <h2 className=" text-white md:text-5xl">
          Acompanhe a gente
        </h2>
        <p className='text-gray-300 my-4'>Fique por dentro das novidades e atualizações do Gaia.</p>

        <div className="flex w-full items-center justify-center gap-4">
          <img
            src={instagram}
            alt="Instagram"
            className="w-10 hover:cursor-pointer hover:opacity-50"
            loading="lazy"
          />
          <img
            src={facebook}
            alt="Facebook"
            className="w-10 hover:cursor-pointer hover:opacity-50"
            loading="lazy"
          />
          <img
            src={youtube}
            alt="YouTube"
            className="w-10 hover:cursor-pointer hover:opacity-50"
            loading="lazy"
          />
        </div>
      </motion.section>
    </main>
  );
}
