import Button from "../components/Button"

export default function Home() {
  return (
    <>
      <section className="relative h-screen flex flex-col justify-center items-center px-6 bg-[url(./src/assets/laura.png)] lg:bg-[url(./src/assets/flautas.png)] bg-cover bg-top">

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/95 lg:bg-gradient-to-t lg:from-black/80 lg:to-black/50"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-white lg:text-9xl">Gaia</h1>
          <p className="text-gray-300 mb-4 lg:text-base">Grupo instrumental do IFRS campus Osório</p>
          <Button to="/about" variant="secondary">
            Saiba mais
          </Button>
        </div>
      </section>
    </>
  )
}
