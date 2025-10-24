type ShowCardProps = {
  date: string;
  time: string;
  location: string;
  venue: string;
};

export default function ShowCard({ show }: { show: ShowCardProps }) {
  return (
    <div
      className={`p-1 flex flex-col bg-transparent bg-opacity-50 rounded-lg shadow-lg text-center w-full hover:opacity-75 transition-all duration-200`}
    >
      <div className="flex">
        <h3 className="text-white w-fit flex-7 text-start">
          {show.location}
        </h3>
        <h3 className="text-white w-fit flex-3 text-end">
          {show.date}
        </h3>
      </div>
      <div className="flex">
        <p className="text-gray-300 flex-7 text-start">
          {show.venue}
        </p>
        <p className="text-gray-300 flex-3 text-end">{show.time}</p>
      </div>
    </div>
  );
}
