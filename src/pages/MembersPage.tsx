import { useNavigate } from 'react-router-dom';
import MemberCard from '../components/MemberCard';
import {members} from '../data/members';
export default function Members() {
  const navigate = useNavigate();

  return (
    <main className="absolute w-full h-full">
      <section className="p-4 mt-24 flex flex-col items-center">
        <h2 className="text-white text-center lg:text-6xl">
          Membros
        </h2>
        <p className="text-gray-300 text-center md:w-4/5 lg:w-2/5">
          Welcome to the members area. Here you can find exclusive
          content and features.
        </p>
      </section>
      <section className=" p-3 grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-3 lg:px-8 xl:px-12">
        {members.map((member: { name: string; role: string; imageSrc: string }) => (
          <MemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            imageSrc={member.imageSrc}
            onClick={() => navigate(`/members/${member.name}`)}
          />
        ))}
      </section>
    </main>
  );
}
