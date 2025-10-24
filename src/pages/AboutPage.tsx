import Image from '../components/Image';
import Button from '../components/Button';
import gaia22 from '../assets/formaçãoGaia2022.jpeg.jpg';
import gaia25 from '../assets/gaiabento2025.jpeg'
export default function AboutPage() {
  return (
    <main className="absolute w-full h-fit flex flex-col items-center">
      <section className="p-4 mt-24 flex flex-col items-center">
        <h2 className="text-white text-center lg:text-6xl">
          {' '}
          História
        </h2>
        <p className="text-gray-300 text-center">
          Aprenda mais sobre nosso grupo, jornada e inspiração
        </p>
      </section>
      <section className="m-4 xl:m-8 relative flex flex-col justify-center pb-16 md:pb-0 max-w-200 ">
        <h3 className="text-white lg:text-4xl">
          Nossa história
        </h3>
        <p className="text-gray-300 mb-1 text-justify leading-5 lg:text-sm">
         O Grupo Instrumental Gaia é composto de uma nova geração de estudantes dedicados à música e à arte. Unidos e criativos, seguimos a tradição do Grupo Instrumental do IFRS Campus Osório, fundado em 2013 pela inesquecível professora Agnes Schmeling. Com uma formação inédita, continuamos a conectar a comunidade através de espetáculos emocionantes, mantendo viva a essência do nosso legado artístico.{' '}
         Desde então, temos trabalhado arduamente para criar músicas
         que ressoem que com nossos fãs e colegas de escola possam transmitir experiências
         e emoções que tivemos.
        </p>
        <Image
          src={gaia22}
          alt="Descrição da imagem"
          caption="Formação do Grupo Instrumental GAIA em 2022 na abertura da 12ª MOEXP do IFRS Câmpus Osório."
          className="w-full h-auto mb-4 flex flex-col items-center"
        />
        <h3 className="text-white lg:text-4xl">Nova formação</h3>
        <p className="text-gray-300 mb-4 text-justify leading-5">
          Desde 2024 o GAIA segue com uma formação 100% nova, e que vem se reinventando, de jovens apaixonados por musica e pelo legado dos ensinamentos da profª Agnes.
          Acreditamos no poder da música como uma forma de expressão e
          conexão humana. Sabemos que a arte é uma ferramenta importante
          para disseminação de assuntos de extrema importância, assim como acolhedora,
          por isso nossas canções abordam temas relevantes para a sociedade
          que prezam o respeito e a diversidade.
        </p>
         
        <Image
          src={gaia25}
          alt="Descrição da imagem"
          caption="Grupo Instrumental GAIA na XII Mostra de Artes do IFRS em 2025."
          className="w-full h-auto mb-4 flex flex-col items-center"
        />
        <h3 className="text-white lg:text-4xl">Nossos Objetivos</h3>
        <p className="text-gray-300 text-justify leading-5">
          Nosso objetivo é criar músicas que inspirem, emocionem e
          unam as pessoas. Queremos levar nossa música para o maior
          número possível de pessoas, seja através de shows ao vivo,
          gravações ou plataformas digitais. Estamos comprometidos em
          crescer como artistas e como indivíduos, sempre buscando
          novas formas de nos expressar e conectar com nosso público.
        </p>
        <Button
          variant="secondary"
          to="/"
          className="w-full md:hidden h-12 absolute bottom-0"
        >
          Voltar
        </Button>
      </section>
    </main>
  );
}
