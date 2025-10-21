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
  const isLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
  if (!member) {
    return (
      <main className="absolute w-full h-full">
        <section className="p-4 mt-24 flex flex-col start">
          <h2 className="text-white">
            Membro não encontrado
          </h2>
          <p className="text-gray-300 text-center md:w-4/5 lg:w-2/5">
            Desculpe, não conseguimos encontrar informações sobre este membro.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="absolute w-full h-fit">
      <section className="p-4 mt-24 flex flex-col items-center h-full md:grid md:grid-cols-2">
        <h2 className="text-white text-center">
          {memberName}
        </h2>
        <p className="text-gray-300 text-center">
          {member.role}
        </p>
        <div className='flex flex-col items-center '>
          <p className="my-4 text-gray-300 text-justify lg:w-2/5">
            {member.description1}
          </p>
          <img src={member.imageSrc} alt={member.name} className='max-h-80 md:max-h-100 md:mt-4 aspect-auto' />
          <p className="mt-4 text-gray-300 text-justify md:hidden">
            {member.description2}
          </p>
        </div>
        <Button className='mt-6 w-full h-12 flex justify-center items-center' variant='secondary' onClick={() => navigate(-1)}>Voltar</Button>
      </section>
    </main>
  );
}
