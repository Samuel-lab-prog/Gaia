type MemberCardProps = {
  name: string;
  imageSrc: string;
  role: string;
  onClick?: () => void;
};

export default function MemberCard({
  name,
  imageSrc,
  role,
  onClick,
}: MemberCardProps) {
  return (
    <div
      className={
        'relative border-2 border-transparent hover:cursor-pointer hover:scale-105 transition-all duration-200 hover:border-white rounded-lg hover:z-10 opacity-70 hover:opacity-100 overflow-hidden   '
      }
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/0 to-black/90 transition-all duration-300"></div>
      <img
        src={imageSrc}
        alt={name}
        className="aspect-9/16 object-cover object-center rounded-lg shadow-lg max-h-100 w-full"
        loading="lazy"
      />
      <h4 className="text-gray-200 absolute bottom-4 xl:bottom-16 text-center w-full z-1 lg:text-3xl xl:text-4xl">
        {name}
      </h4>
      <p className="text-gray-400 absolute bottom-2 xl:bottom-12 text-center w-full z-1">
        {role}
      </p>
    </div>
  );
}
