import MemberCard from '../components/MemberCard';
export default function Members() {
  return (
    <main className="absolute w-full h-full">
      <section
        className="p-4 mt-32 flex flex-col items-center"
      >
        <h2 className="text-white text-center lg:text-6xl">
          Membros
        </h2>
        <p className="text-gray-300 text-center md:w-4/5 lg:w-2/5">
          Welcome to the members area. Here you can find exclusive
          content and features.
        </p>
      </section>
      <section
        className=" p-3 grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-3 lg:px-8 xl:px-12"
      >
        <MemberCard
          name="Laura Fetter"
          role="Vocalista"
          imageSrc="./src/assets/laura.png"
        />
        <MemberCard
          name="Maurício"
          role="Guitarrista"
          imageSrc="./src/assets/mauricio.png"
        />
        <MemberCard
          name="Leonel"
          role="Violinista"
          imageSrc="./src/assets/leonel.png"
        />
        <MemberCard
          name="Richard"
          role="Baixista"
          imageSrc="./src/assets/richard.jpg"
        />
        <MemberCard
          name="Manuela"
          role="Guitarrista"
          imageSrc="./src/assets/manuela.jpg"
        />
        <MemberCard
          name="Pietro"
          role="Guitarrista"
          imageSrc="./src/assets/pietro.jpg"
        />
      </section>
    </main>
  );
}
