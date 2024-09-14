

const ResultCard = ({
  student: { image_url, exam, name, description, rank, exam_year },
}) => {


  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-full ">
      <img
        className="object-cover w-full rounded-t-lg h-52 md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
        src={image_url}
        alt={name}
      />
      <div className="flex flex-col space-y-3 w-full p-4 h-full leading-normal">
        <h5 className="mb-2 text-xl font-bold tracking-tight bg-red-800 px-3  py-1 rounded text-white ">
          {exam + " " + exam_year}
        </h5>
        <h5 className="mb-2 text-xl font-bold tracking-tight  text-gray-800">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div>
          <div className="text-2xl font-bold text-red-800">
            {rank.includes("%") ? "Percentage" : "All India Rank"}
          </div>
          <div className="text-6xl font-extrabold text-red-800">{rank}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
