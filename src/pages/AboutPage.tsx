import Image from '../components/Image';
import Button from '../components/Button';
import laura2 from '../assets/laura2.png';
export default function AboutPage() {
  return  (
    <main className="absolute w-full h-fit flex flex-col items-center">
      <section className="p-4 mt-24 flex flex-col items-center">
        <h2 className="text-white text-center lg:text-6xl">
          {' '}
          História
        </h2>
        <p className="text-gray-300 text-center">
          Learn more about our band, our journey, and what drives us
          to create
        </p>
      </section>
      <section className="m-4 xl:m-8 relative flex flex-col justify-center pb-16 md:pb-0 max-w-200 ">
        <h3 className="text-white lg:text-4xl">Quando tudo começou</h3>
        <p className="text-gray-300 mb-1 text-justify leading-5 lg:text-sm">
          Em 2020, um grupo de amigos se reuniu para compartilhar sua
          paixão pela música e pela arte. Assim nasceu a nossa
          banda.{' '} Desde então, temos trabalhado arduamente para criar músicas
          que ressoem com nossos fãs e transmitam nossas experiências
          e emoções.
        </p>
        <Image
          src={laura2}
          alt="Descrição da imagem"
          caption="Laura na apresentação de Bento Gonçalves"
          className="w-full h-auto mb-4 flex flex-col items-center"
        />
        <h3 className="text-white lg:text-4xl">Nossos Valores</h3>
        <p className="text-gray-300 mb-4 text-justify leading-5">
          Acreditamos no poder da música como uma forma de expressão e
          conexão humana. Sabemos que Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Numquam officiis reiciendis
          aperiam eos necessitatibus officia aspernatur dolorum
          pariatur commodi, voluptate soluta minus praesentium,
          corporis ducimus similique. A, unde hic. Sed.
        </p>
        <p className="text-gray-300 mb-4 text-justify leading-5">
          Acreditamos no poder da música como uma forma de expressão e
          conexão humana. Sabemos que Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Numquam officiis reiciendis
          aperiam eos necessitatibus officia aspernatur dolorum
          pariatur commodi, voluptate soluta minus praesentium,
          corporis ducimus similique. A, unde hic. Sed.
        </p>
        <Image
          src={laura2}
          alt="Descrição da imagem"
          caption="Laura na apresentação de Bento Gonçalves"
          className="w-full h-auto mb-4 flex flex-col items-center"
        />
        <h3 className='text-white lg:text-4xl'>Nossos Objetivos</h3>
        <p className="text-gray-300 text-justify leading-5">
          Nosso objetivo é criar músicas que inspirem, emocionem e
          unam as pessoas. Queremos levar nossa música para o maior
          número possível de pessoas, seja através de shows ao vivo,
          gravações ou plataformas digitais. Estamos comprometidos em
          crescer como artistas e como indivíduos, sempre buscando
          novas formas de nos expressar e conectar com nosso público.
        </p>
        <Button variant="secondary" to='/' className='w-full md:hidden h-12 absolute bottom-0'>Voltar</Button>
      </section>
    </main>
  );
}
