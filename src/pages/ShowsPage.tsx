import Button from '../components/Button';
import ShowCard from '../components/ShowCard';
import { shows } from '../data/shows';
import { useNavigate } from 'react-router-dom';
export default function ShowsPage() {
  const navigate = useNavigate();
  return (
    <main className="absolute w-full h-full">
      <section className="p-4 lg:px-12 mt-24 flex flex-col items-center">
        <h2 className="text-white text-center lg:text-6xl">Shows</h2>
        <p className="text-gray-300 text-center md:w-4/5 lg:w-2/5">
          Cehque as novas apresentações do Grupo GAIA.
        </p>
        <div className="flex flex-col items-center mt-6 w-full">
          {shows.map(
            (show: {
              date: string;
              time: string;
              location: string;
              venue: string;
            }) => (
              <>
                <ShowCard key={show.date + show.time} show={show} />
                <hr className="border-gray-100 my-2 w-full" />
              </>
            )
          )}
        </div>
        <Button
          variant="secondary"
          className="w-full md:hidden flex items-center justify-center h-12 mt-4"
          onClick={() => navigate(-1)}
        >
          Voltar
        </Button>
      </section>
    </main>
  );
}
