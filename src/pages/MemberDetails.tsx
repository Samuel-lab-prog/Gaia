import { useParams } from 'react-router-dom';
import { members } from '../data/members';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Button from '../components/Button';
export default function MemberDetails() {
  const { memberName } = useParams();
  const member = members.find((m) => m.name === memberName);
  const navigate = useNavigate();
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  if (!member) {
    throw new Error('Membro não encontrado');
  }

  return !isTablet ? (
    <main className="absolute w-full h-fit">
      <section className="p-4 mt-24 lg:p-8 flex flex-col items-center h-full">
        <h2 className="text-white text-center">{memberName}</h2>
        <p className="text-gray-300 text-center">{member.role}</p>
        <div className="flex flex-col items-center ">
          <p className="my-4 text-gray-300 text-justify">
            {member.description1}
          </p>
          <img
            src={member.imageSrc}
            alt={member.name}
            className="max-h-80 aspect-auto"
          />
          <p className="mt-4 text-gray-300 text-justify md:hidden">
            {member.description2}
          </p>
        </div>
        <Button
          className="mt-6 w-full h-12 flex justify-center items-center"
          variant="secondary"
          onClick={() => navigate(-1)}
        >
          Voltar
        </Button>
      </section>
    </main>
  ) : (
    <main className="absolute w-full h-full mt-24">
      <section className="px-4 lg:px-12 grid grid-cols-2 gap-x-2 h-fit xl:grid-cols-5">
        <div className="flex flex-col items-start justify-center relative h-120 xl:col-span-2">
          <h2 className="text-white text-center">{memberName}</h2>
          <span className="text-white">{member.role}</span>
          <p className="my-4 text-gray-300 text-justify">
            {member.description1}
          </p>
          <p className="text-gray-300 text-justify">
            {member.description2}
          </p>
          <Button
            className="w-30 absolute bottom-0 mt-2 h-12 flex justify-center items-center col-span-2 md:hidden"
            variant="secondary"
            onClick={() => navigate(-1)}
          >
            Voltar
          </Button>
        </div>
        <img
          src={member.imageSrc}
          alt={member.name}
          className="object-cover object-top rounded-lg h-120 xl:col-span-3"
        />
      </section>
    </main>
  );
}
